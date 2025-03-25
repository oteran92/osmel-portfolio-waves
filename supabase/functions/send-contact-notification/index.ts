
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.3";

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

    // Send notification email using email service of your choice
    // For demonstration, we'll just log it for now
    console.log(`
      New contact message:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `);

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
