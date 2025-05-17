import OpenAI from "openai"

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

/**
 * Translate a word or phrase using OpenAI
 */
export async function translateWord(word: string): Promise<string> {
  try {
    // For demo purposes, check if we're in development without an API key
    if (!process.env.OPENAI_API_KEY) {
      console.log(`Mock translation for: ${word}`)

      // Mock translations for demo
      const translations: Record<string, string> = {
        Lorem: "The pain",
        ipsum: "itself",
        dolor: "pain",
        sit: "to sit",
        amet: "love",
        consectetur: "to follow",
        adipiscing: "adipiscing",
        elit: "elite",
      }

      return translations[word] || `Translation of "${word}"`
    }

    // Real implementation using OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful language translation assistant. Translate the given word or phrase concisely without additional explanation.",
        },
        {
          role: "user",
          content: `Translate this word: "${word}"`,
        },
      ],
      temperature: 0.3,
      max_tokens: 50,
    })

    return response.choices[0].message.content?.trim() || `Translation of "${word}"`
  } catch (error) {
    console.error("Translation error:", error)
    return `Error translating "${word}"`
  }
}

/**
 * Generate an example sentence for a flashcard
 */
export async function createExampleSentence(word: string, translation: string): Promise<string> {
  try {
    // For demo purposes, check if we're in development without an API key
    if (!process.env.OPENAI_API_KEY) {
      console.log(`Mock example for: ${word} (${translation})`)

      // Mock examples for demo
      if (word.toLowerCase() === "bonjour") {
        return "Bonjour, comment allez-vous aujourd'hui?"
      }

      return `Here is an example sentence using "${word}".`
    }

    // Real implementation using OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful language learning assistant. Create natural, simple example sentences that demonstrate proper usage of words or phrases.",
        },
        {
          role: "user",
          content: `Create a simple example sentence in the original language using this word or phrase: "${word}" (which means "${translation}"). Only return the example sentence, nothing else.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 100,
    })

    return response.choices[0].message.content?.trim() || `Example sentence using "${word}"`
  } catch (error) {
    console.error("Example generation error:", error)
    return `Error generating example for "${word}"`
  }
}

/**
 * Call OpenAI API with a custom prompt
 */
export async function callOpenAI(prompt: string): Promise<string> {
  try {
    // For demo purposes, check if we're in development without an API key
    if (!process.env.OPENAI_API_KEY) {
      console.log(`Mock OpenAI response for: ${prompt}`)
      return `Response to: "${prompt}"`
    }

    // Real implementation using OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful language learning assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 150,
    })

    return response.choices[0].message.content?.trim() || `Response to: "${prompt}"`
  } catch (error) {
    console.error("OpenAI API error:", error)
    return `Error processing: "${prompt}"`
  }
}
