import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { skills, projects } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const prompt = `Based on this developer's skills and projects, provide 3 brief, actionable insights about their skillset. Be encouraging and professional.

Skills: ${skills.join(", ")}
Projects: ${projects.map((p: any) => `${p.title} (${p.tech.join(", ")})`).join("; ")}

Return ONLY a JSON array with 3 objects, each having "insight" (1 sentence max) and "type" (one of: "strength", "opportunity", "trend"). Example:
[{"insight": "Strong foundation in NLP enables advanced chatbot development", "type": "strength"}]`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: "You are a career coach analyzing developer portfolios. Return valid JSON only." },
          { role: "user", content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "[]";
    
    // Parse JSON from the response
    let insights;
    try {
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      insights = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } catch {
      console.error("Failed to parse insights JSON:", content);
      insights = [
        { insight: "Your AI and ML skills position you well for emerging tech roles", type: "strength" },
        { insight: "Consider deepening cloud deployment expertise", type: "opportunity" },
        { insight: "NLP is trending - your sentiment analysis work is valuable", type: "trend" }
      ];
    }

    return new Response(JSON.stringify({ insights }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in skill-insights function:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
