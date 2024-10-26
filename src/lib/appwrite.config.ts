import * as sdk from "node-appwrite";

const client= new sdk.Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_API_ENDPOINT || '') 
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID || '')
  .setKey(process.env.NEXT_PUBLIC_API_KEY || '');

console.log("API Endpoint:", process.env.NEXT_PUBLIC_API_ENDPOINT);
console.log("Project ID:", process.env.NEXT_PUBLIC_PROJECT_ID);
console.log("API Key:", process.env.NEXT_PUBLIC_API_KEY);

export const messaging = new sdk.Messaging(client);