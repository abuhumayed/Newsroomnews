import { NextResponse } from "next/server"

// This would be your actual news API integration
export async function GET() {
  try {
    // Example with NewsAPI (you'd need to sign up for an API key)
    // const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEWS_API_KEY}&country=us&pageSize=10`)
    // const data = await response.json()

    // For now, returning sample data with dynamic timestamps
    const sampleNews = [
      {
        title: "AI Revolution: New Breakthrough in Machine Learning",
        description:
          "Researchers announce major advancement in artificial intelligence that could transform multiple industries.",
        url: "https://example.com/ai-breakthrough",
        urlToImage: `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop`,
        source: { name: "Tech Weekly" },
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Climate Action: Global Leaders Meet for Emergency Summit",
        description:
          "World leaders convene to address urgent climate challenges and announce new environmental policies.",
        url: "https://example.com/climate-summit",
        urlToImage: `https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=200&fit=crop`,
        source: { name: "Environmental Today" },
        publishedAt: new Date(Date.now() - 1800000).toISOString(),
      },
      {
        title: "Space Exploration: Mars Mission Achieves Historic Milestone",
        description:
          "NASA's latest Mars rover makes groundbreaking discovery that could indicate signs of ancient life.",
        url: "https://example.com/mars-discovery",
        urlToImage: `https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop`,
        source: { name: "Space News" },
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
      },
    ]

    return NextResponse.json({ articles: sampleNews })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}
