interface QuickInfoCardProps {
  title: string
  description: string
}

export function QuickInfoCard({ title, description }: QuickInfoCardProps) {
  return (
    <div className="mb-6 p-4 border-l-4 border-black">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
    </div>
  )
}
