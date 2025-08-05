import React from 'react'
import type { Movie } from '../types/movie'
import { MovieCard } from './MovieCard'
import './MovieGrid.css'

interface MovieGridProps {
  movies: Movie[]
  className?: string
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, className = '' }) => {
  if (movies.length === 0) {
    return (
      <div className='movie-grid movie-grid--empty'>
        <div className='movie-grid__empty-state'>
          <span className='movie-grid__empty-icon' aria-hidden='true'>
            🎬
          </span>
          <h3 className='movie-grid__empty-title'>No movies found</h3>
          <p className='movie-grid__empty-text'>Try searching for something else or check back later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`movie-grid ${className}`}>
      <div className='movie-grid__container'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
