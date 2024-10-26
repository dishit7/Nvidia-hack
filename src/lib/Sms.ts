import twilio from 'twilio'

const client = twilio(process.env.NEXT_PUBLIC_TWILIO_SID, process.env.NEXT_PUBLIC_TWILIO_TOKEN);

export const sendSmsNotification = async (phoneNumber:string, content:string) => {
    try {
        const message = await client.messages.create({
            body: content,
            from: process.env.TWILIO_PHONE_NUMBER, // Twilio phone number
            to: phoneNumber
        });
        console.log("Message sent:", message.sid);
        return message.sid;
    } catch (error) {
        console.log("Error sending SMS:", error);
    }
};
