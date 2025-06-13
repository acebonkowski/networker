import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

const app = express();
app.use(express.json());

// Configure OpenAI with an API key from env
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

// Simple endpoint to categorize a message
app.post('/categorize', async (req, res) => {
  const { text } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Categorize this message: ${text}` }]
    });
    const category = completion.data.choices[0].message.content.trim();
    res.json({ category });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
