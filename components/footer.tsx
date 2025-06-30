export function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-2xl font-bold">THE NEWSROOM</div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="hover:bg-red-600 hover:text-black px-3 py-1 transition-colors duration-200">
              Home
            </a>
            <a href="/news" className="hover:bg-red-600 hover:text-black px-3 py-1 transition-colors duration-200">
              News
            </a>
            <a
              href="/categories"
              className="hover:bg-red-600 hover:text-black px-3 py-1 transition-colors duration-200"
            >
              Categories
            </a>
            <a href="/about" className="hover:bg-red-600 hover:text-black px-3 py-1 transition-colors duration-200">
              About Us
            </a>
            <a href="/contact" className="hover:bg-red-600 hover:text-black px-3 py-1 transition-colors duration-200">
              Contact
            </a>
          </nav>

          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} THE NEWSROOM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
