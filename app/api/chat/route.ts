import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { ChatCompletionMessageParam } from 'ai/prompts';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  try {
      
  
    const body = await req.json();
    const messages = body.messages;

    const systemMessage: ChatCompletionMessageParam = {
      role: "system",
      content: "You are a friendy and a funny bot but act as a human friend. Please answer in that way but make it simple"
    }
  
    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      temperature: 1,
      messages: [systemMessage, ...messages]
    });
  
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    return Response.json({error: "Internal error server"}, {status: 500})
  }
}