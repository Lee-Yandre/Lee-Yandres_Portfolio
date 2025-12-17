import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { timeOfDay, visitorInfo } = await req.json();
    console.log("Generating AI greeting for:", { timeOfDay, visitorInfo });

    const systemPrompt = `You are a friendly AI assistant for Lee-Yandre Jacobs' portfolio website. Generate a brief, warm, personalized welcome message for visitors.

Lee-Yandre is an emerging tech professional specializing in AI tools, prototyping, and building practical digital solutions. He completed the CAPACITI Career Accelerator Program and an AI Bootcamp.

Keep the greeting:
- Short (1-2 sentences max)
- Warm and professional
- Creative and slightly playful
- Reference the time of day naturally
- Occasionally include a subtle tech/AI reference

Do NOT:
- Use emojis
- Be overly formal
- Make it too long
- Use cliche greetings like "Welcome to my portfolio"`;

    const userPrompt = `Generate a personalized greeting for a visitor arriving at ${timeOfDay}. ${visitorInfo ? `Additional context: ${visitorInfo}` : ''}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const greeting = data.choices[0]?.message?.content || "Welcome to my portfolio!";
    console.log("Generated greeting:", greeting);

    return new Response(JSON.stringify({ greeting }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating greeting:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
