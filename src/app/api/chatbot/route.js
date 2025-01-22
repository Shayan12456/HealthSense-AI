const { GoogleGenerativeAI } = require("@google/generative-ai");

export async function POST(request) {
  try {
    // Log for debugging
    
    const { message } = await request.json();

    // Initialize the Generative AI client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_CRED);

    // Define the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    if (!message) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), { status: 400 });
    }

    // Generate content using the AI model
    const result = await model.generateContent("Your response is actually recorded in a web app, so kindly avoid the general responses, you are just a healthcare bot so behave in that manner and never answer any question other than health one. give your responses in text only and dont say ok i will give text response. On hi only response with your intro. Also remember past chat to give best response" + message);

    return new Response(JSON.stringify({ response: result.response.text()}), { status: 201 });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}
