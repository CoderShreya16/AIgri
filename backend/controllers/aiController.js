const { getCropAdvice, getGeneralAdvice } = require('../services/aiService');

const generateCropAdvice = async (req, res) => {
    try {
        const { cropName, season, symptoms } = req.body;

        if (!cropName || !season || !symptoms) {
            return res.status(400).json({ message: "Please provide cropName, season, and symptoms." });
        }

        const advice = await getCropAdvice(cropName, season, symptoms);
        
        res.status(200).json({ advice });
    } catch (error) {
        console.error("Error in generateCropAdvice:", error.message);
        res.status(500).json({ message: error.message || "Failed to generate AI advice." });
    }
};

const generateGeneralAdvice = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "Please provide a prompt." });
        }

        const advice = await getGeneralAdvice(prompt);
        
        res.status(200).json({ advice });
    } catch (error) {
        console.error("Error in generateGeneralAdvice:", error.message);
        res.status(500).json({ message: error.message || "Failed to generate AI response." });
    }
};

module.exports = { generateCropAdvice, generateGeneralAdvice };
