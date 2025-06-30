"use client"

import { useState, useEffect } from "react"
import { ArticleCard } from "./article-card"

interface Article {
  title: string
  description: string
  urlToImage?: string
  url: string
  source: { name: string }
  publishedAt: string
}

export function DynamicArticleGrid() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/news")
        const data = await response.json()
        setArticles(data.articles || [])
      } catch (error) {
        console.error("Error fetching articles:", error)
        // Fallback to static articles if API fails
        setArticles([
          {
            title: "Revolutionary AI Technology Transforms Healthcare Industry",
            description:
              "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnosis.",
            urlToImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
            url: "#",
            source: { name: "Health Tech" },
            publishedAt: new Date().toISOString(),
          },
          // Add more fallback articles...
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()

    // Refresh articles every 10 minutes
    const interval = setInterval(fetchArticles, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article, index) => (
        <ArticleCard
          key={`${article.url}-${index}`}
          title={article.title}
          description={article.description}
          imageUrl={article.urlToImage}
          likeCount={Math.floor(Math.random() * 500) + 50}
          commentCount={Math.floor(Math.random() * 100) + 10}
          url={article.url}
        />
      ))}
    </div>
  )
}
