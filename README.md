# 📰 The Newsroom - Modern News Application

A responsive, modern news application built with Next.js 14, featuring real-time news updates, dynamic content, and a clean, professional design.

![The Newsroom](https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop)

## ✨ Features

### 🔥 Core Features
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Real-time News Updates** - Live news feed that refreshes automatically
- **Dynamic Content** - All content updates automatically without manual intervention
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Performance** - Built with Next.js 14 for optimal speed and SEO

### 📱 User Experience
- **Mobile-First Design** - Perfect experience on all screen sizes
- **Intuitive Navigation** - Easy-to-use navigation with hamburger menu on mobile
- **Loading States** - Smooth loading animations and skeleton screens
- **Error Handling** - Graceful fallbacks when content fails to load
- **Accessibility** - Built with accessibility best practices

### 🎨 Design Features
- **Tailwind CSS** - Modern utility-first CSS framework
- **shadcn/ui Components** - High-quality, accessible UI components
- **Lucide Icons** - Beautiful, consistent iconography
- **Responsive Images** - Optimized images with Next.js Image component
- **Dark/Light Theme Ready** - Prepared for theme switching

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd newsroom-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   bun install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your news API key:
   \`\`\`env
   NEXT_PUBLIC_GNEWS_API_KEY=your_gnews_api_key_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
newsroom-app/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── article-card.tsx  # News article cards
│   ├── article-grid.tsx  # Article grid layout
│   ├── live-news.tsx     # Live news feed
│   ├── navbar.tsx        # Navigation component
│   ├── spotlight.tsx     # Hero section
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
├── public/               # Static assets
└── README.md            # This file
\`\`\`

## 🔧 Configuration

### Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# News API Configuration
NEXT_PUBLIC_GNEWS_API_KEY=your_gnews_api_key_here

# Optional: Other API keys
NEWS_API_KEY=your_newsapi_key_here
\`\`\`

### News API Setup

1. **GNews API** (Recommended)
   - Sign up at [gnews.io](https://gnews.io)
   - Get your free API key
   - Add to \`.env.local\` as \`NEXT_PUBLIC_GNEWS_API_KEY\`

2. **NewsAPI** (Alternative)
   - Sign up at [newsapi.org](https://newsapi.org)
   - Get your API key
   - Add to \`.env.local\` as \`NEWS_API_KEY\`

## 📦 Available Scripts

\`\`\`bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
\`\`\`

## 🎨 Customization

### Styling
- **Tailwind CSS** - Modify \`tailwind.config.js\` for custom themes
- **CSS Variables** - Update \`app/globals.css\` for color schemes
- **Components** - Customize components in \`components/\` directory

### Content
- **Static Articles** - Modify \`components/article-grid.tsx\`
- **Quick Info** - Update \`components/quick-info-sidebar.tsx\`
- **Navigation** - Customize \`components/navbar.tsx\`

### API Integration
- **News Sources** - Update API endpoints in \`components/live-news.tsx\`
- **Refresh Intervals** - Modify \`useEffect\` intervals in components
- **Error Handling** - Customize fallback content

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify** - Works with static export
- **Railway** - Full-stack deployment
- **DigitalOcean** - App Platform deployment

## 📱 Responsive Breakpoints

\`\`\`css
sm: 640px   # Small devices (phones)
md: 768px   # Medium devices (tablets)
lg: 1024px  # Large devices (laptops)
xl: 1280px  # Extra large devices (desktops)
2xl: 1536px # 2X large devices (large desktops)
\`\`\`

## 🔄 Auto-Refresh Intervals

- **Live News**: 10 minutes
- **Main Articles**: 15 minutes (if using dynamic version)
- **Quick Info**: 5 minutes (if using dynamic version)

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Lucide React** - Icon library

### Deployment
- **Vercel** - Recommended hosting platform
- **Next.js Image Optimization** - Automatic image optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-username/newsroom-app/issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **shadcn** - For the beautiful UI components
- **Unsplash** - For the high-quality stock photos
- **Lucide** - For the beautiful icons

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🔮 Future Enhancements

- [ ] Dark mode toggle
- [ ] User authentication
- [ ] Bookmarking articles
- [ ] Social media sharing
- [ ] Push notifications
- [ ] Offline reading
- [ ] Search functionality
- [ ] Category filtering
- [ ] User preferences
- [ ] Comments system

---

**Built with ❤️ using Next.js 14 and modern web technologies**
