import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { Loading } from '../components/Loading'
import { ErrorMessage } from '../components/ErrorMessage'
import { movieService } from '../services/movieService'
import { formatDate, formatRuntime, formatCurrency, formatRating } from '../utils/formatters'
import './MovieDetailPage.css'

export const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const movieId = id ? parseInt(id, 10) : undefined
  const { movie, loading, error, retry } = useMovieDetails(movieId)

  if (loading) {
    return (
      <div className='movie-detail-page'>
        <div className='container'>
          <Loading size='large' message='Loading movie details...' className='loading--page' />
        </div>
      </div>
    )
  }

  if (error || !movie) {
    return (
      <div className='movie-detail-page'>
        <div className='container'>
          <div className='movie-detail-page__nav'>
            <Link to='/' className='back-link'>
              ← Back to Movies
            </Link>
          </div>
          <ErrorMessage message={error || 'Movie not found'} onRetry={retry} variant='card' />
        </div>
      </div>
    )
  }

  const backdropUrl = movieService.getImageUrl(movie.backdrop_path, 'w1280')
  const posterUrl = movieService.getImageUrl(movie.poster_path, 'w500')

  return (
    <div className='movie-detail-page'>
      {/* Hero Section with Backdrop */}
      <div className='movie-detail-page__hero' style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div className='movie-detail-page__hero-overlay'>
          <div className='container'>
            <nav className='movie-detail-page__nav'>
              <Link to='/' className='back-link'>
                ← Back to Movies
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='container'>
        <main className='movie-detail-page__content'>
          <div className='movie-detail-page__main'>
            <div className='movie-detail-page__poster'>
              <img
                src={posterUrl}
                alt={`${movie.title} poster`}
                className='movie-detail-page__poster-image'
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDQgMjEwSDEzNlYyMTguNjY3SDE0NFYyMTBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xNTYgMjEwSDE2NFYyMTguNjY3SDE1NlYyMTBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xMzYgMjI3LjMzM0gxNjRWMjM2SDEzNlYyMjcuMzMzWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
                  target.onerror = null // Prevent further error events
                }}
              />
            </div>

            <div className='movie-detail-page__info'>
              <header className='movie-detail-page__header'>
                <h1 className='movie-detail-page__title'>{movie.title}</h1>
                {movie.tagline && <p className='movie-detail-page__tagline'>"{movie.tagline}"</p>}
              </header>

              <div className='movie-detail-page__meta'>
                <div className='movie-detail-page__rating'>
                  <span className='rating-icon' aria-hidden='true'>
                    ⭐
                  </span>
                  <span className='rating-value'>{formatRating(movie.vote_average)}</span>
                  <span className='rating-count'>({movie.vote_count.toLocaleString()} votes)</span>
                </div>

                <div className='movie-detail-page__details'>
                  <dl className='details-list'>
                    <div className='details-item'>
                      <dt>Release Date</dt>
                      <dd>
                        <time dateTime={movie.release_date}>{formatDate(movie.release_date)}</time>
                      </dd>
                    </div>

                    <div className='details-item'>
                      <dt>Runtime</dt>
                      <dd>{formatRuntime(movie.runtime)}</dd>
                    </div>

                    <div className='details-item'>
                      <dt>Genres</dt>
                      <dd>
                        {movie.genres.map((genre, index) => (
                          <span key={genre.id} className='genre-tag'>
                            {genre.name}
                            {index < movie.genres.length - 1 && ', '}
                          </span>
                        ))}
                      </dd>
                    </div>

                    <div className='details-item'>
                      <dt>Status</dt>
                      <dd>{movie.status}</dd>
                    </div>

                    {movie.budget > 0 && (
                      <div className='details-item'>
                        <dt>Budget</dt>
                        <dd>{formatCurrency(movie.budget)}</dd>
                      </div>
                    )}

                    {movie.revenue > 0 && (
                      <div className='details-item'>
                        <dt>Revenue</dt>
                        <dd>{formatCurrency(movie.revenue)}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>

              <section className='movie-detail-page__overview'>
                <h2 className='section-title'>Overview</h2>
                <p className='overview-text'>{movie.overview}</p>
              </section>

              {movie.homepage && (
                <div className='movie-detail-page__links'>
                  <a href={movie.homepage} target='_blank' rel='noopener noreferrer' className='external-link'>
                    Visit Official Website →
                  </a>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
