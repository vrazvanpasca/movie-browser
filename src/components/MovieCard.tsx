import React from 'react'
import { Link } from 'react-router-dom'
import type { Movie } from '../types/movie'
import { movieService } from '../services/movieService'
import { formatYear, formatRating, truncateText } from '../utils/formatters'
import './MovieCard.css'

interface MovieCardProps {
  movie: Movie
  className?: string
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, className = '' }) => {
  const posterUrl = movieService.getImageUrl(movie.poster_path)
  const releaseYear = formatYear(movie.release_date)
  const rating = formatRating(movie.vote_average)
  const truncatedOverview = truncateText(movie.overview, 150)

  return (
    <article className={`movie-card ${className}`}>
      <Link to={`/movie/${movie.id}`} className='movie-card__link' aria-label={`View details for ${movie.title}`}>
        <div className='movie-card__poster-container'>
          <img
            src={posterUrl}
            alt={`${movie.title} poster`}
            className='movie-card__poster'
            loading='lazy'
            onError={(e) => {
              const target = e.target as HTMLImageElement
              // Fallback to placeholder if image fails to load
              target.src =
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDQgMjEwSDEzNlYyMTguNjY3SDE0NFYyMTBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xNTYgMjEwSDE2NFYyMTguNjY3SDE1NlYyMTBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xMzYgMjI3LjMzM0gxNjRWMjM2SDEzNlYyMjcuMzMzWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
              target.onerror = null
            }}
          />

          <div className='movie-card__rating' aria-label={`Rating: ${rating}`}>
            <span className='movie-card__rating-icon' aria-hidden='true'>
              ⭐
            </span>
            <span className='movie-card__rating-value'>{rating}</span>
          </div>
        </div>

        <div className='movie-card__content'>
          <header className='movie-card__header'>
            <h3 className='movie-card__title'>{movie.title}</h3>
            <time className='movie-card__year' dateTime={movie.release_date}>
              {releaseYear}
            </time>
          </header>

          <p className='movie-card__overview'>{truncatedOverview}</p>
        </div>
      </Link>
    </article>
  )
}
