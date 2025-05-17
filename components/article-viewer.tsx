"use client"

import type React from "react"

import { useState, useRef } from "react"
import { TooltipTranslate } from "@/components/tooltip-translate"

export function ArticleViewer({ articleId }: { articleId: string }) {
  // Using article ID for future content fetching
  console.log(`Rendering article: ${articleId}`)
  const [selectedText, setSelectedText] = useState("")
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(false)
  const articleRef = useRef<HTMLDivElement>(null)

  // Example article content
  const articleContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
  `

  const handleWordClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.tagName === "SPAN") {
      const word = target.textContent || ""
      setSelectedText(word.trim())

      const rect = target.getBoundingClientRect()
      const articleRect = articleRef.current?.getBoundingClientRect()

      if (articleRect) {
        setTooltipPosition({
          x: rect.left - articleRect.left + rect.width / 2,
          y: rect.bottom - articleRect.top,
        })
        setShowTooltip(true)
      }
    }
  }

  const closeTooltip = () => {
    setShowTooltip(false)
  }

  // Split text into words and wrap each word in a span
  const renderArticle = () => {
    return articleContent.split("\n\n").map((paragraph, i) => (
      <p key={i} className="mb-4">
        {paragraph.split(" ").map((word, j) => (
          <span key={j} className="cursor-pointer hover:bg-yellow-100 dark:hover:bg-yellow-900 px-0.5 rounded">
            {word}{" "}
          </span>
        ))}
      </p>
    ))
  }

  return (
    <div className="relative" ref={articleRef}>
      <div className="prose prose-sm dark:prose-invert max-w-none" onClick={handleWordClick}>
        {renderArticle()}
      </div>

      {showTooltip && <TooltipTranslate word={selectedText} position={tooltipPosition} onClose={closeTooltip} />}
    </div>
  )
}
