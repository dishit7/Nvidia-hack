import twilio from 'twilio';

const client = twilio(process.env.NEXT_PUBLIC_TWILIO_SID, process.env.NEXT_PUBLIC_TWILIO_TOKEN);

export async function POST(req: Request) {
  const { phoneNumber, content } = await req.json();

  try {
    const message = await client.messages.create({
      body: content,
      from: process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER, 
      to: phoneNumber,
    });
    return new Response(JSON.stringify({ success: true, messageSid: message.sid }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error sending SMS:", error);
    return new Response(JSON.stringify({ success: false, error: error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
