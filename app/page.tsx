import { Spotlight } from "@/components/spotlight"
import { ArticleGrid } from "@/components/article-grid"
import { QuickInfoSidebar } from "@/components/quick-info-sidebar"
import { LiveNews } from "@/components/live-news"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Spotlight />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-3 space-y-8">
            <ArticleGrid />
            <LiveNews />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <QuickInfoSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
