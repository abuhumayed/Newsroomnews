import { Diamond } from "lucide-react"

export function Spotlight() {
  return (
    <div className="flex flex-col items-center w-full py-12 sm:py-16 lg:py-20 px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[130px] font-bold mb-4">NEWS</h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wider uppercase mb-8">
          The Latest and Most Important News for You
        </p>

        <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
          <div className="flex-1 h-0.5 bg-gray-800"></div>
          <div className="mx-4 p-2">
            <Diamond className="w-6 h-6 text-gray-800" />
          </div>
          <div className="flex-1 h-0.5 bg-gray-800"></div>
        </div>
      </div>
    </div>
  )
}
