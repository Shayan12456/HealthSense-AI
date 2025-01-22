const { GoogleGenerativeAI } = require("@google/generative-ai");

export async function POST(request) {
  try {
    // Log for debugging
    
    const { data, description, what } = await request.json();

    // Initialize the Generative AI client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_CRED);

    // Define the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const imageResp = await fetch(data)
        .then((response) => response.arrayBuffer());
    
    const result = await model.generateContent([
        {
            inlineData: {
                data: Buffer.from(imageResp).toString("base64"),
                mimeType: "image/jpeg",
            },
        },
       (what=="image")?"Your response is actually recorded in a web app, so kindly avoid the general responses, you are just a healthcare bot so behave in that manner and never answer any question other than health one. give your responses in text only and dont say ok i will give text response. On hi only response with your intro. Also remember past chat to give best response. Also if image is not relevant ask to upload relevant image. if only image relevant and no text so just tell about disease if you can. also if image of any medical or health report so ask them to refer to 'reportease' section of the website nothing else please" + description:
       "Your response is actually recorded in a web app, so kindly avoid the general responses, you are just a healthcare bot so behave in that manner and never answer any question other than health one. give your responses in text only and dont say ok i will give text response. On hi only response with your intro. Also remember past chat to give best response. Also if image is not relevant ask to upload relevant image. if only image relevant and no text so just tell about disease if you can. right now if you receive image of anything else than health report avoid it. if its any skin or disease symptom image so respond with refer to lifelens section please and if any irrelevant image so ask user for proper thing. if its a report or patient or person info then respond them in a way that they can understand because sometime only doctor can understand medical reports so try to explain them in layman's term" + description
    ]);

    return new Response(JSON.stringify({ response: result.response.text() }), { status: 201 });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}
