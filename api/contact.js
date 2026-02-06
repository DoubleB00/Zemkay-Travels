import { Resend } from 'resend';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const { name, email, phone, message, honeypot } = req.body;

    // Honeypot spam check
    if (honeypot) {
      return res.status(200).json({
        success: true,
        message: 'Form submitted successfully'
      });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    // Validate field content
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Name cannot be empty'
      });
    }

    if (trimmedEmail.length === 0 || !trimmedEmail.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    if (trimmedMessage.length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Message must be at least 10 characters long'
      });
    }

    if (message.length > 10000) {
      return res.status(400).json({
        success: false,
        error: 'Message is too long (maximum 10,000 characters)'
      });
    }

    // Initialize Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured'
      });
    }

    const resend = new Resend(resendApiKey);

    // Prepare email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FFCC00 0%, #FFD700 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { color: #1a1a1a; margin: 0; font-size: 24px; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
            .value { color: #333; background: #f9f9f9; padding: 10px; border-radius: 4px; }
            .footer { background: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Website Contact Form Submission - ZEmKay Travels</h1>
            </div>
            <div class="content">
              <p>You have received a new message from your ZEmKay Travels website:</p>

              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>

              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${phone || "Not provided"}</div>
              </div>

              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your ZEmKay Travels website contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: "ZEmKay Travels <contact@zemkaytravels.com>",
      to: "MKajee@ZEmKayTravels.com",
      subject: "New Website Contact Form Submission - ZEmKay Travels",
      html: emailHtml,
      replyTo: email,
    });

    if (emailResponse.error) {
      console.error('Resend API error:', emailResponse.error);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email. Please try again or call us directly.'
      });
    }

    console.log('Email sent successfully:', emailResponse.data);

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Error processing contact form:', error.message);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request'
    });
  }
}
