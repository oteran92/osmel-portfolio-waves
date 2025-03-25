
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.3";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Parse request body
    const { name, email, message }: ContactMessage = await req.json();

    // Store message in the database
    const { data, error } = await supabaseClient
      .from("contact_messages")
      .insert([{ name, email, message }])
      .select();

    if (error) {
      console.error("Error storing contact message:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Osmel P. Teran <onboarding@resend.dev>",
      to: "osmelprieto92@gmail.com",
      subject: "Nuevo mensaje de contacto",
      html: `
        <h2>Has recibido un nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (emailError) {
      console.error("Error sending email notification:", emailError);
      // We still return success since the message was stored in the database
    } else {
      console.log("Email notification sent successfully:", emailData);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been received. Thank you for contacting us!" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
