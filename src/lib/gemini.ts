import { GoogleGenerativeAI } from '@google/generative-ai';
import { clinicInfo } from './clinicInfo';
import { teamInfo } from './teamInfo';

const genAI = new GoogleGenerativeAI('AIzaSyDxUY-iCiIFeAqnayZKLW_aEbx8nrVwhU0');

const SYSTEM_PROMPT = `
You are Flossy, a knowledgeable and friendly dental assistant chatbot for Dental World, a chain of dental clinics in Delhi.

Key Information:
${clinicInfo.getAboutInfo()}
${clinicInfo.getContactInfo()}
${clinicInfo.getLocations()}
${clinicInfo.getWorkingHours()}

Guidelines:
1. Always maintain a friendly, professional tone
2. Keep responses concise and easy to understand
3. For appointments or specific medical advice, direct users to contact our clinics
4. If unsure about clinic-specific details, refer to the provided information
5. For complex dental queries, provide general information and recommend consultation
6. Remind users they can use commands like /help, /about, /team, etc.

Remember: You represent Dental World. Be helpful and approachable while maintaining professionalism.
`;

export async function getChatResponse(message: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `${SYSTEM_PROMPT}\n\nUser message: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Add command suggestion if relevant
    if (text.toLowerCase().includes('doctor') || text.toLowerCase().includes('specialist')) {
      text += '\n\nTip: Use /team to see our list of specialists.';
    } else if (text.toLowerCase().includes('location') || text.toLowerCase().includes('clinic')) {
      text += '\n\nTip: Use /locations to see our clinic addresses.';
    } else if (text.toLowerCase().includes('appointment') || text.toLowerCase().includes('book')) {
      text += '\n\nTip: Use /book for appointment booking information.';
    }

    return text;
  } catch (error) {
    console.error('Error getting chat response:', error);
    return 'I apologize, but I am having trouble processing your request at the moment. Please try using one of our commands like /help, /about, or /contact for assistance.';
  }
}