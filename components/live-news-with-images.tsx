"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ImageIcon } from "lucide-react"

interface NewsArticle {
  title: string
  description: string
  url: string
  urlToImage?: string
  source: {
    name: string
  }
  publishedAt: string
}

export function LiveNewsWithImages() {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)

      try {
        // In a real app, you'd use a news API like NewsAPI, GNews, or similar
        // Example: const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us`)

        // For now, simulating dynamic news with random images
        const sampleNews: NewsArticle[] = [
          {
            title: "Breaking: Major Tech Breakthrough Announced",
            description:
              "Scientists reveal revolutionary quantum computing advancement that could change everything we know about processing power.",
            url: "#",
            urlToImage: `https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&t=${Date.now()}`,
            source: { name: "Tech Today" },
            publishedAt: new Date().toISOString(),
          },
          {
            title: "Global Climate Summit Reaches Consensus",
            description:
              "World leaders agree on unprecedented climate action plan with binding commitments for carbon neutrality.",
            url: "#",
            urlToImage: `https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=200&fit=crop&t=${Date.now()}`,
            source: { name: "Environmental News" },
            publishedAt: new Date(Date.now() - 3600000).toISOString(),
          },
          {
            title: "Space Mission Discovers New Exoplanet",
            description:
              "NASA's latest deep space telescope identifies potentially habitable planet in nearby star system.",
            url: "#",
            urlToImage: `https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop&t=${Date.now()}`,
            source: { name: "Space Explorer" },
            publishedAt: new Date(Date.now() - 7200000).toISOString(),
          },
        ]

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setNews(sampleNews)
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()

    // Refresh news every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span>Live News Updates</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-32 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span>Live News Updates</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {news.map((article, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
              {/* Article Image */}
              <div className="relative aspect-video mb-3 rounded-lg overflow-hidden bg-gray-100">
                {article.urlToImage ? (
                  <Image
                    src={article.urlToImage || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>

              <h3 className="font-semibold text-lg mb-2 hover:text-red-600 cursor-pointer transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{article.source.name}</Badge>
                <a
                  href={article.url}
                  className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Read more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
