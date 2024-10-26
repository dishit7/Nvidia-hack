import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { messageInput } = await req.json();
    const prompt = `${messageInput} - generate 3 attractive notifications based on it and send in a list ina formated way`;

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
    });

    // Extracting generated messages from the response
    const suggestions = response.choices.map(choice => choice.message.content);

    return new Response(
      JSON.stringify({ success: true, suggestions }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error("Error generating suggestions:", error);
    return new Response(
      JSON.stringify({ success: false, error: error || "Unknown error" }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

