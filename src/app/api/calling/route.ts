// app/api/makeCall/route.js
import twilio from 'twilio';
 
console.log(`TWILLIO ${process.env.NEXT_PUBLIC_TWILIO_SID} ${process.env.NEXT_PUBLIC_TWILIO_TOKEN}`)
const accountSid = process.env.NEXT_PUBLIC_TWILIO_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_TOKEN;
const client = twilio(accountSid, authToken);

// Function to handle the call request
export async function POST(request:any) {
    const { phoneNumber } = await request.json();

    console.log(phoneNumber)
    // Define a default message to be spoken in the call
    const defaultMessage = "Hello! This is a default call message from our app.";

    try {
        const call = await client.calls.create({
            from:"+18603930724",  // Your Twilio number
            to: phoneNumber, // Recipient number
            url: `https://your-url-here.com/audio?text=${encodeURIComponent(defaultMessage)}`, // URL for Twilio to fetch the audio
        });

        console.log("Call SID:", call.sid);
        return new Response(JSON.stringify({ sid: call.sid }), { status: 200 });
    } catch (error) {
        console.error("Error creating call:", error);
        return new Response("Error creating call", { status: 500 });
    }
}
