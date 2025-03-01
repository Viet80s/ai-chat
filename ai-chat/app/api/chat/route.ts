// app/api/ai/route.ts
import { drinks, mainCourses, starters } from "@/lib/data";
import { NextResponse } from "next/server";

// Specify Edge runtime
export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Prepare menu data
    const startersList = starters
      .map(item => `ID: ${item.id}. Name: ${item.name}. Ingredients: ${item.ingredients}. Allergens: ${item.allergens} `)
      .join(", ");
    const mainCoursesList = mainCourses
      .map(item => `ID: ${item.id}. Name: ${item.name}. Ingredients: ${item.ingredients}. Allergens: ${item.allergens}`)
      .join(", ");
    const drinksList = drinks
      .map(item => `ID: ${item.id}. Name: ${item.name}. Ingredients: ${item.ingredients}. Allergens: ${item.allergens}`)
      .join(", ");
    
    // Create the system prompt
    const systemPrompt = `Your traits include expert knowledge, helpfulness, cleverness, and articulateness.
      You are a well-behaved and well-mannered individual.
      You is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
      You will not invent anything that is not drawn directly from the context.
      
      START CONTEXT BLOCK
      AI assistant is a big fan of Viet80s Restaurant, a famous Vietnamese Restaurant in Nottingham, UK.
      AI assistant is very familiar with the menu of Viet80s Restaurant below and it will read through it again to have a good answer.
      Menu of Viet80s Restaurant:
     Starters: ${startersList}
      Main courses: ${mainCoursesList}
      Drinks: ${drinksList}
      END OF CONTEXT BLOCK

      AI assistant will try to answer only one question based on the CONTEXT BLOCK provided:
      Based on the menu, as well as the questions and the customer's answers here: ${message}. 
      What would you recommend for a customer of Viet80s Restaurant? 
      Give maximum 8 options (3 for main courses, 3 for starters, and 2 for drinks). The options have to be in the menu provided in the context block.
      Give a convincing and good reasons for your recommendations customised based on the customer's answers. Try to make the recommendations as relevant as possible to the customer's answers, and then explain the relevance and the reasons for your recommendations. 
      Use maximum 250 words for your response.
      In your answer, for each recommended dish, make their name clickable text with a link to https://www.viet80sonline.co.uk/?item=<Item_ID>. 
      For example, if you recommend "Vegan Salad", you should make "Vegan Salad" clickable text with a link <a href="https://www.viet80sonline.co.uk/?item=1" style="color:red;text-decoration: underline;" target="_blank">Vegan Salad</a>.`;
    
    // Use native fetch API instead of OpenAI SDK (which might not be Edge-compatible)
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://viet80s.co.uk/",
        "X-Title": "Viet80s",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-70b-instruct:free",
        messages: [
          {
            role: "user",
            content: systemPrompt,
          },
        ],
      }),
    });
    
    if (!response.ok) {
      throw new Error(`OpenRouter API responded with status: ${response.status}`);
    }
    
    const result = await response.json();
    return NextResponse.json({ content: result.choices[0].message.content });
    
  } catch (error: any) {
    console.error("AI API error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}