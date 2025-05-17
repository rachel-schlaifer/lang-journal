import { NextResponse } from "next/server"
import { translateWord } from "@/lib/openai"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.word) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get source and target languages with defaults
    const sourceLanguage = body.sourceLanguage || "French"
    const targetLanguage = body.targetLanguage || "English"

    // Create a more specific prompt for translation
    const prompt = `Translate the ${sourceLanguage} word or phrase "${body.word}" to ${targetLanguage}.`
    
    // Log the prompt for debugging purposes
    console.log(`Using prompt: ${prompt}`)

    // Call the OpenAI translation function
    const translation = await translateWord(body.word)

    return NextResponse.json({ data: { translation } })
  } catch (error) {
    console.error("Error translating word:", error)
    return NextResponse.json({ error: "Failed to translate word" }, { status: 500 })
  }
}
