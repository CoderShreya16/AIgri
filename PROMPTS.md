# AIgri — AI Chat Prompt Variations

This document records the three prompt variations tested for the general AI agricultural chat feature in AIgri, built on Google Gemini (`gemini-flash-latest`).

---

## System Role / Persona

All prompt variations used the following role context injected before the user's query:

> _"You are an expert AI agricultural assistant named AIgri."_

This establishes a consistent brand persona and primes the model to prioritise farming-related knowledge in all responses.

---

## Variation 1 — Simple Direct Prompt

**Prompt instruction used:**
```
Answer the user's question: "{userPrompt}"
```

**Example user input:**
> "What is the best fertiliser for tomatoes?"

**Example AI output:**
> "Tomatoes benefit most from a balanced fertiliser with an NPK ratio of 10-10-10 during early growth, then a low-nitrogen, high-phosphorus formula like 5-10-10 once flowering begins to encourage fruit set."

**Result:**
Accurate and helpful for on-topic questions. However, with no domain boundary, asking unrelated questions (e.g., "Write me a poem") produced fully off-topic responses, making the feature behave like a generic chatbot rather than a focused agricultural tool.

---

## Variation 2 — Hard Refusal Constraint

**Prompt instruction used:**
```
You are an agricultural assistant. Only answer questions about farming, crops, soil, or weather.
If the question is unrelated to agriculture, respond with: "I can only assist with agricultural queries."
Answer the user's question: "{userPrompt}"
```

**Example user input:**
> "Who won the cricket World Cup?"

**Example AI output:**
> "I can only assist with agricultural queries."

**Result:**
Domain enforcement worked correctly, but the hard refusal felt abrupt and robotic. Users asking slightly ambiguous questions (e.g., "How does climate change affect things?") were unnecessarily rejected. The experience was overly restrictive and reduced perceived friendliness of the assistant.

---

## Variation 3 — Persona-Led Redirect (Currently Implemented)

**Prompt instruction used:**
```
You are an expert AI agricultural assistant named AIgri.
A user has asked the following question: "{userPrompt}"

Provide a helpful, informative, and concise answer directly related to agriculture, farming, crops, or agricultural technology.
If the question is unrelated to agriculture, politely steer the conversation back to farming.
```

**Example user input:**
> "Who won the cricket World Cup?"

**Example AI output:**
> "I'm AIgri, your farming assistant — sports scores are a little outside my field (pun intended)! If you'd like to talk about crop rotation schedules, soil testing, or pest management, I'm ready to help."

**Result:**
Provides complete, detailed answers for agricultural queries while handling off-topic questions gracefully with a friendly, branded redirect. The response quality remained high for all farming questions tested, including disease diagnosis, fertiliser recommendations, and seasonal planting advice.

---

## Best Prompt & Reasoning

**Variation 3** is the most effective and is the currently deployed implementation in `backend/services/aiService.js`.

Explicitly naming the AI "AIgri" inside the system prompt creates a consistent, branded experience that users immediately identify with the platform. The instruction to "politely steer" rather than "refuse" off-topic inputs eliminates harsh rejections while still keeping the assistant focused on agriculture. This approach mirrors how well-designed production chatbots handle scope boundaries without frustrating the user. Across all test inputs — from specific crop disease queries to general farming questions — Variation 3 produced the most relevant, well-structured, and user-friendly responses.

