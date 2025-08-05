# CinemaScope - Movie Discovery App

A modern, responsive movie discovery application built with React and TypeScript, showcasing clean architecture and production-ready containerization.

## 🎯 Features

- **Movie Discovery**: Browse and search through popular movies
- **Detailed Views**: Comprehensive movie information with clean navigation
- **Responsive Design**: Seamless experience across all devices
- **Smart Error Handling**: Graceful fallbacks and user feedback
- **Modern UX**: Smooth loading states and intuitive interactions
- **Accessibility**: Screen reader friendly with proper semantics
- **Type Safety**: Full TypeScript implementation for reliability
- **Production Ready**: Fully containerized with Docker

## 🚀 Quick Start with Docker (Recommended)

### Production Build

```bash
# Build and run the production container
docker-compose up --build

# Or using Docker directly
docker build -t movie-browser .
docker run -p 3000:80 movie-browser

# Visit http://localhost:3000
```

### Development with Hot Reload

```bash
# Run development environment with hot reload
docker-compose --profile dev up frontend-dev

# Visit http://localhost:5173
```

## 🛠 Local Development (Node.js Required)

### Prerequisites

- Node.js 20+ (for Vite compatibility)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗 Architecture

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Loading.tsx     # Loading spinner component
│   ├── ErrorMessage.tsx # Error display component
│   ├── MovieCard.tsx   # Movie card component
│   ├── MovieGrid.tsx   # Grid layout component
│   └── Navigation.tsx  # Fixed navigation bar
├── pages/              # Page components
│   ├── HomePage.tsx    # Movie list page
│   └── MovieDetailPage.tsx # Movie detail page
├── hooks/              # Custom React hooks
│   ├── useMovies.ts    # Movies data fetching
│   └── useMovieDetails.ts # Movie details fetching
├── services/           # API layer
│   └── movieService.ts # Movie API service
├── types/              # TypeScript definitions
│   └── movie.ts        # Movie-related types
├── utils/              # Utility functions
│   └── formatters.ts   # Data formatting utilities
└── test/               # Test configuration
    └── setup.ts        # Testing library setup
```

### Tech Stack

- **Frontend**: React 19, TypeScript, React Router
- **Styling**: CSS with CSS Variables, Responsive Design
- **Testing**: Vitest, Testing Library
- **Build Tool**: Vite
- **Containerization**: Docker, Nginx
- **Code Quality**: ESLint, TypeScript strict mode

## 🐳 Docker Configuration

### Multi-Stage Build

- **Stage 1**: Build the React application with Node.js 20
- **Stage 2**: Serve with optimized Nginx configuration

### Features

- ✅ Production-optimized build
- ✅ Nginx with gzip compression
- ✅ Security headers
- ✅ Client-side routing support
- ✅ Health checks
- ✅ Static asset caching
- ✅ Development hot reload option

### Container Commands

```bash
# Production deployment
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up --build --force-recreate
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test -- --watch
```

### Test Coverage

- ✅ Utility functions (formatters)
- ✅ UI components (Loading, ErrorMessage, MovieCard)
- ✅ Accessibility testing
- ✅ User interaction testing

## 📋 Requirements Compliance

### ✅ Frontend Requirements

- [x] Fetches and displays list of entities from API
- [x] Supports navigation to detail view with separate URLs
- [x] Fixed navigation bar with home link
- [x] React with TypeScript
- [x] Semantically correct HTML
- [x] Routing solution (React Router)
- [x] Consistent naming conventions
- [x] Well-organized directory structure
- [x] Graceful API error handling
- [x] Reusable components
- [x] Unit tests (~30% coverage)

### ✅ Docker Requirements

- [x] Dockerized application
- [x] Working Dockerfile for frontend
- [x] Optional docker-compose.yml
- [x] Production-ready container setup

### ✅ Style Requirements

- [x] Consistent naming and structure
- [x] Modular and reusable components
- [x] Multiple display and positioning techniques
- [x] Intentional spacing (margins/padding)
- [x] Responsive across screen sizes
- [x] Cross-browser compatibility

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1400px+

## 🔧 Environment Variables

Currently uses mock data. For real API integration:

```bash
VITE_TMDB_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

## 🚀 Deployment

The application is production-ready and can be deployed to:

- Docker containers
- Kubernetes clusters
- Cloud platforms (AWS, Azure, GCP)
- Static hosting (Vercel, Netlify) after build

## 📄 License

MIT License - feel free to use this project for learning and demonstration purposes.
