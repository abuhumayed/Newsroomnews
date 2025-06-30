"use client"

import { useState, useEffect } from "react"
import { ArticleCard } from "./article-card"

interface Article {
  title: string
  description: string
  image?: string
  url: string
  source: { name: string }
  publishedAt: string
}

export function FullyDynamicArticleGrid() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)

      try {
        // This would use your GNews API for main articles too
        const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY
        if (apiKey) {
          const response = await fetch(`https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&max=8`)
          const data = await response.json()

          if (data.articles) {
            setArticles(
              data.articles.map((article: any) => ({
                title: article.title,
                description: article.description,
                image: article.image,
                url: article.url,
                source: article.source,
                publishedAt: article.publishedAt,
              })),
            )
          }
        } else {
          // Fallback to dynamic sample data (changes each time)
          const dynamicArticles = generateDynamicArticles()
          setArticles(dynamicArticles)
        }
      } catch (error) {
        console.error("Error fetching articles:", error)
        // Fallback to dynamic sample data
        const dynamicArticles = generateDynamicArticles()
        setArticles(dynamicArticles)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()

    // Refresh every 15 minutes
    const interval = setInterval(fetchArticles, 15 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const generateDynamicArticles = () => {
    const topics = [
      {
        title: `Breaking: ${getRandomTechNews()} Announced Today`,
        description:
          "Latest technology breakthrough promises to revolutionize the industry with unprecedented innovation.",
        image: `https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&t=${Date.now()}`,
        category: "Technology",
      },
      {
        title: `Global Markets: ${getRandomMarketNews()} Impacts Trading`,
        description: "Financial analysts report significant market movements following recent economic developments.",
        image: `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop&t=${Date.now()}`,
        category: "Finance",
      },
      {
        title: `Climate Update: ${getRandomClimateNews()} Initiative Launched`,
        description: "Environmental leaders announce new measures to address climate change challenges globally.",
        image: `https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=200&fit=crop&t=${Date.now()}`,
        category: "Environment",
      },
      {
        title: `Space News: ${getRandomSpaceNews()} Mission Update`,
        description: "Space agencies provide latest updates on ongoing missions and future exploration plans.",
        image: `https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop&t=${Date.now()}`,
        category: "Space",
      },
    ]

    return topics.map((topic, index) => ({
      title: topic.title,
      description: topic.description,
      image: topic.image,
      url: "#",
      source: { name: `${topic.category} Today` },
      publishedAt: new Date(Date.now() - index * 1800000).toISOString(),
    }))
  }

  // Helper functions for dynamic content
  const getRandomTechNews = () => {
    const techNews = [
      "AI Breakthrough",
      "Quantum Computing Advance",
      "5G Network Expansion",
      "Blockchain Innovation",
      "Robotics Development",
    ]
    return techNews[Math.floor(Math.random() * techNews.length)]
  }

  const getRandomMarketNews = () => {
    const marketNews = [
      "Federal Reserve Decision",
      "Cryptocurrency Surge",
      "Stock Market Rally",
      "Economic Policy Change",
      "Trade Agreement",
    ]
    return marketNews[Math.floor(Math.random() * marketNews.length)]
  }

  const getRandomClimateNews = () => {
    const climateNews = ["Renewable Energy", "Carbon Reduction", "Green Technology", "Sustainability", "Climate Action"]
    return climateNews[Math.floor(Math.random() * climateNews.length)]
  }

  const getRandomSpaceNews = () => {
    const spaceNews = ["Mars Exploration", "Satellite Launch", "ISS Research", "Moon Base", "Deep Space"]
    return spaceNews[Math.floor(Math.random() * spaceNews.length)]
  }

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
          key={`${article.url}-${index}-${Date.now()}`}
          title={article.title}
          description={article.description}
          imageUrl={article.image}
          likeCount={Math.floor(Math.random() * 500) + 50}
          commentCount={Math.floor(Math.random() * 100) + 10}
          url={article.url}
        />
      ))}
    </div>
  )
}
