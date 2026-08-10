const { GoogleGenerativeAI } = require('@google/generative-ai');

const getCropAdvice = async (cropName, season, symptoms) => {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is missing in environment variables.");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" }); // Or gemini-1.5-flash

        const prompt = `You are an expert AI Crop Advisor. A farmer needs advice for their crop. 
Crop Name: ${cropName}
Season: ${season}
Symptoms: ${symptoms}

Please provide a structured response strictly following this format exactly, with the exact headings:

Possible Causes
[Detail the possible causes here in bullet points or paragraphs]

Recommendations
[Detail actionable recommendations here]

Precautions
[Detail precautions for the future here]

When to Seek Expert Help
[Detail when to seek professional help]`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error("Failed to generate AI advice. Please try again later.");
    }
};

const getGeneralAdvice = async (userPrompt) => {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is missing in environment variables.");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" }); 

        const prompt = `You are an expert AI agricultural assistant named AIgri. 
A user has asked the following question: "${userPrompt}"

Provide a helpful, informative, and concise answer directly related to agriculture, farming, crops, or agricultural technology.
If the question is unrelated to agriculture, politely steer the conversation back to farming.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error (General Advice):", error);
        throw new Error("Failed to generate AI response. Please try again later.");
    }
};

module.exports = { getCropAdvice, getGeneralAdvice };
