import { messaging } from "@/lib/appwrite.config";
import { parseStringify } from "@/lib/utils";
import { ID } from "node-appwrite";

export const sendSmsNotification= async (userId:string,content:string)=>{
    try{
        console.log(userId)
        console.log(content)
        const message = await messaging.createSms(
            ID.unique(),
            content,
            [],
            [userId]
          );
          console.log(message)
          return parseStringify(message);
    }catch(e){
        console.log(e);
    }
}

// createSms(messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string): Promise<Models.Message>;