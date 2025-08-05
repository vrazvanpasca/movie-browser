import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MovieCard } from '../MovieCard'
import type { Movie } from '../../types/movie'

// Mock movie data
const mockMovie: Movie = {
  id: 1,
  title: 'Test Movie',
  overview: 'This is a test movie overview that should be displayed in the card.',
  poster_path: '/test-poster.jpg',
  backdrop_path: '/test-backdrop.jpg',
  release_date: '2023-01-15',
  vote_average: 8.5,
  vote_count: 1000,
  genre_ids: [28, 12],
  adult: false,
  original_language: 'en',
  original_title: 'Test Movie',
  popularity: 100.0,
  video: false,
}

const MovieCardWrapper = ({ movie }: { movie: Movie }) => (
  <BrowserRouter>
    <MovieCard movie={movie} />
  </BrowserRouter>
)

describe('MovieCard', () => {
  it('should render movie title', () => {
    render(<MovieCardWrapper movie={mockMovie} />)
    expect(screen.getByText('Test Movie')).toBeInTheDocument()
  })

  it('should render movie overview', () => {
    render(<MovieCardWrapper movie={mockMovie} />)
    expect(screen.getByText(/This is a test movie overview/)).toBeInTheDocument()
  })

  it('should render release year', () => {
    render(<MovieCardWrapper movie={mockMovie} />)
    expect(screen.getByText('2023')).toBeInTheDocument()
  })

  it('should render rating', () => {
    render(<MovieCardWrapper movie={mockMovie} />)
    expect(screen.getByText('8.5/10')).toBeInTheDocument()
  })

  it('should render poster image with correct alt text', () => {
    render(<MovieCardWrapper movie={mockMovie} />)
    const posterImage = screen.getByAltText('Test Movie poster')
    expect(posterImage).toBeInTheDocument()
  })

  it('should create correct link to movie detail page', () => {
    render(<MovieCardWrapper movie={mockMovie} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/movie/1')
  })

  it('should have proper accessibility attributes', () => {
    render(<MovieCardWrapper movie={mockMovie} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('aria-label', 'View details for Test Movie')
  })

  it('should handle long overview text by truncating', () => {
    const longOverviewMovie = {
      ...mockMovie,
      overview:
        'This is a very long overview that should be truncated because it exceeds the maximum length that we want to display in the movie card component. It should be cut off with ellipsis.',
    }

    render(<MovieCardWrapper movie={longOverviewMovie} />)
    const overviewText = screen.getByText(/This is a very long overview/)
    expect(overviewText.textContent).toMatch(/\.\.\.$/)
  })

  it('should render as an article element for semantic HTML', () => {
    render(<MovieCardWrapper movie={mockMovie} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })
})
