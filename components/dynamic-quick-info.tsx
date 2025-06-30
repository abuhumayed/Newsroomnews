"use client"

import { useState, useEffect } from "react"
import { QuickInfoCard } from "./quick-info-card"

export function DynamicQuickInfo() {
  const [quickInfo, setQuickInfo] = useState<Array<{ id: number; title: string; description: string }>>([])

  useEffect(() => {
    const generateQuickInfo = () => {
      const topics = [
        "Market Update",
        "Tech Innovation",
        "Climate Action",
        "Space Discovery",
        "Health Breakthrough",
        "Economic Policy",
        "Sports Championship",
        "Entertainment News",
      ]

      const descriptions = [
        "Latest developments show significant progress in key areas affecting global markets.",
        "Revolutionary breakthrough promises to transform industry standards and practices.",
        "New initiatives launched to address pressing challenges facing communities worldwide.",
        "Research findings reveal important insights that could impact future developments.",
      ]

      const dynamicInfo = Array.from({ length: 4 }, (_, index) => ({
        id: index + 1,
        title: `${topics[Math.floor(Math.random() * topics.length)]}: ${getRandomHeadline()}`,
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
      }))

      setQuickInfo(dynamicInfo)
    }

    const getRandomHeadline = () => {
      const headlines = [
        "Major Announcement Expected",
        "Industry Leaders Respond",
        "Global Impact Anticipated",
        "Experts Weigh In",
        "Breaking Developments",
        "Significant Changes Ahead",
      ]
      return headlines[Math.floor(Math.random() * headlines.length)]
    }

    generateQuickInfo()

    // Refresh every 5 minutes
    const interval = setInterval(generateQuickInfo, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Quick Updates</h2>
      <div className="space-y-4">
        {quickInfo.map((item) => (
          <QuickInfoCard key={`${item.id}-${Date.now()}`} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  )
}
