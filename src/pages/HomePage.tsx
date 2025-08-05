import React, { useState } from 'react'
import { useMovies } from '../hooks/useMovies'
import { Loading } from '../components/Loading'
import { ErrorMessage } from '../components/ErrorMessage'
import { MovieGrid } from '../components/MovieGrid'
import './HomePage.css'

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { movies, loading, error, searchMovies, fetchMovies, retry } = useMovies()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      await searchMovies(searchQuery.trim())
    } else {
      await fetchMovies()
    }
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    fetchMovies()
  }

  return (
    <div className='home-page'>
      <div className='container'>
        <header className='home-page__header'>
          <h1 className='home-page__title'>Discover Movies</h1>
          <p className='home-page__subtitle'>Explore top-rated films and find your next favorite</p>

          <form className='home-page__search-form' onSubmit={handleSearch}>
            <div className='search-input-group'>
              <label htmlFor='movie-search' className='visually-hidden'>
                Search movies
              </label>
              <input
                id='movie-search'
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search movies...'
                className='search-input'
                disabled={loading}
              />
              <button type='submit' className='search-button' disabled={loading} aria-label='Search movies'>
                🔍
              </button>
              {searchQuery && (
                <button
                  type='button'
                  className='clear-search-button'
                  onClick={handleClearSearch}
                  disabled={loading}
                  aria-label='Clear search'
                >
                  ✕
                </button>
              )}
            </div>
          </form>
        </header>

        <main className='home-page__content'>
          {loading && <Loading size='large' message='Loading movies...' className='loading--page' />}

          {error && !loading && <ErrorMessage message={error} onRetry={retry} variant='card' />}

          {!loading && !error && (
            <>
              {searchQuery && (
                <div className='home-page__search-results'>
                  <h2 className='home-page__results-title'>Search results for "{searchQuery}"</h2>
                  <p className='home-page__results-count'>
                    {movies.length} {movies.length === 1 ? 'movie' : 'movies'} found
                  </p>
                </div>
              )}

              <MovieGrid movies={movies} />
            </>
          )}
        </main>
      </div>
    </div>
  )
}
