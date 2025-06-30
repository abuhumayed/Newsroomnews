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
  image?: string
  source: {
    name: string
  }
  publishedAt: string
}

export function LiveNews() {
  const [newsData, setNewsData] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)

      try {
        // Try to fetch from GNews API (you'd need to add your API key as environment variable)
        // const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY || '0d7160397647d12964b734ce9b0778ba'
        // const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`

        // For now, using sample data that matches your original structure but with fresh content
        const sampleNews: NewsArticle[] = [
          {
            title: "Breaking: Major AI Breakthrough Announced by Tech Giants",
            description:
              "Leading technology companies unveil revolutionary artificial intelligence system that could transform multiple industries within the next decade.",
            url: "https://example.com/ai-breakthrough",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
            source: { name: "TechCrunch" },
            publishedAt: new Date().toISOString(),
          },
          {
            title: "Climate Summit Reaches Historic Agreement on Carbon Reduction",
            description:
              "World leaders commit to ambitious new targets for carbon neutrality, marking the most significant climate action in decades.",
            url: "https://example.com/climate-agreement",
            image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=200&fit=crop",
            source: { name: "Environmental Times" },
            publishedAt: new Date(Date.now() - 1800000).toISOString(),
          },
          {
            title: "Space Mission Discovers Potentially Habitable Exoplanet",
            description:
              "NASA's James Webb Space Telescope identifies Earth-like planet in nearby star system, raising hopes for extraterrestrial life.",
            url: "https://example.com/exoplanet-discovery",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop",
            source: { name: "Space News" },
            publishedAt: new Date(Date.now() - 3600000).toISOString(),
          },
          {
            title: "Global Economy Shows Strong Recovery Signs",
            description:
              "Latest economic indicators suggest robust growth across major markets, with unemployment reaching historic lows.",
            url: "https://example.com/economic-recovery",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
            source: { name: "Financial Today" },
            publishedAt: new Date(Date.now() - 5400000).toISOString(),
          },
          {
            title: "Medical Breakthrough: New Treatment Shows Promise",
            description:
              "Researchers announce successful trials of innovative therapy that could revolutionize treatment for chronic diseases.",
            url: "https://example.com/medical-breakthrough",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
            source: { name: "Medical Journal" },
            publishedAt: new Date(Date.now() - 7200000).toISOString(),
          },
        ]

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setNewsData(sampleNews)
      } catch (error) {
        console.error("Error fetching news:", error)
        // Fallback to your original static data structure
        setNewsData([
          {
            title: "Twitter begins rolling out $7.99 Twitter Blue plan with verification",
            description:
              "Twitter has begun rolling out a pricier Twitter Blue plan, starting at $7.99 per month, that includes verification and ostensibly fewer ads.",
            url: "https://techcrunch.com/2022/11/05/twitter-begins-rolling-out-7-99-twitter-blue-plan-with-verification-fewer-ads/",
            image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=200&fit=crop",
            source: { name: "TechCrunch" },
            publishedAt: "2022-11-05T19:06:54Z",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchNews()

    // Refresh every 10 minutes
    const interval = setInterval(fetchNews, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span>Latest Updates</span>
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
          <span>Latest Updates</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {newsData.map((article, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
              {/* Article Image */}
              <div className="relative aspect-video mb-3 rounded-lg overflow-hidden bg-gray-100">
                {article.image ? (
                  <Image
                    src={article.image || "/placeholder.svg"}
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
                  target="_blank"
                  rel="noopener noreferrer"
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
