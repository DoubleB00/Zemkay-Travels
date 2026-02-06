import { createClient } from "npm:@supabase/supabase-js@2";
import { Resend } from "npm:resend@3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Supabase configuration is missing");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);

    const formData: ContactFormData = await req.json();
    const { name, email, phone, message, honeypot } = formData;

    if (honeypot) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Form submitted successfully"
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name, email, and message are required"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate field content matches RLS policy requirements
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name cannot be empty"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (trimmedEmail.length === 0 || !trimmedEmail.includes("@")) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please provide a valid email address"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (trimmedMessage.length < 10) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Message must be at least 10 characters long"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (message.length > 10000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Message is too long (maximum 10,000 characters)"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const userAgent = req.headers.get("user-agent") || "";
    const forwarded = req.headers.get("x-forwarded-for");
    const ipAddress = forwarded ? forwarded.split(",")[0] : "";

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone: phone || "",
        message,
        ip_address: ipAddress,
        user_agent: userAgent,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save submission");
    }

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
              <h1>🌍 New Contact Form Submission</h1>
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

    const emailResponse = await resend.emails.send({
      from: "ZEmKay Travels <contact@zemkaytravels.com>",
      to: ["MKajee@ZEmKayTravels.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (emailResponse.error) {
      console.error("Email error details:", emailResponse.error);
      const errorMessage = emailResponse.error.message || JSON.stringify(emailResponse.error);
      throw new Error(`Failed to send email: ${errorMessage}`);
    }

    console.log("Email sent successfully to MKajee@ZEmKayTravels.com:", emailResponse.data);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully"
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error processing contact form:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "An error occurred"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
