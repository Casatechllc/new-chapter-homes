// server/api/contact.ts
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, phone, address, message, formType, ...extraFields } = body

  if (!name || (!email && !phone)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and a valid contact method (email or phone) are required.',
    })
  }

  const config = useRuntimeConfig()

  // Setup Nodemailer transport using your environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or update with your SMTP host details if not using Gmail
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  })

  // Format extra dynamic details if submitted from customized forms
  const detailsList = Object.entries(extraFields)
    .map(([key, val]) => `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${key}:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${val}</td></tr>`)
    .join('')

  try {
    // 1. Email to the Owner / Admin
    await transporter.sendMail({
      from: config.noreplyAlias || config.emailUser,
      to: config.adminEmail,
      subject: `🚨 New Lead Submission: ${name} (${formType || 'General Form'})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #0B3D91; border-bottom: 2px solid #0B3D91; padding-bottom: 10px;">New Website Lead Received</h2>
          <p><strong>Form Source:</strong> ${formType || 'Standard Website Form'}</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || 'Not Provided'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email || 'Not Provided'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Address / Location:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${address || 'Not Provided'}</td></tr>
            ${detailsList}
          </table>
          ${message ? `<div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border-radius: 6px;"><strong>Additional Notes:</strong><p style="margin: 5px 0 0 0;">${message}</p></div>` : ''}
        </div>
      `,
    })

    // 2. Confirmation Email to the Client (Only if a valid email was provided)
    if (email) {
      await transporter.sendMail({
        from: config.noreplyAlias || config.emailUser,
        to: email,
        subject: `We've received your request - New Chapter Homes`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
            <h2 style="color: #0B3D91;">Thank you for reaching out, ${name}!</h2>
            <p>We have successfully received your submission. A member of our team at <strong>New Chapter Homes</strong> will review your details and get back to you shortly.</p>
            <p>If you need immediate assistance, feel free to call or text us directly at <strong>(540) 616-2321</strong>.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888;">New Chapter Homes — The Shenandoah Valley & surrounding areas.</p>
          </div>
        `,
      })
    }

    return { success: true, message: 'Emails dispatched successfully' }
  } catch (error: any) {
    console.error('Email dispatch error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.',
    })
  }
})