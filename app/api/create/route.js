import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

// Define values.
const api_key = "kqm5c2a3yjak";
const api_secret = "6mrhjqq8nky3fde9tgbd75g6dxshzg86b44esr5nbryvv2yy7mj9cke3pcaqk5ys";
// const user_id = "user_2rTh2LvYGneiRLxtmXq6IZMw369";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json()
  const token = serverClient.createToken(user.data.id);
  console.log("USER HAS BEEN CREATED")
  return Response.json({ message: "Hello World" });
}
