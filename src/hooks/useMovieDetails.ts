import { useState, useEffect } from 'react'
import type { MovieDetails } from '../types/movie'
import { movieService } from '../services/movieService'

interface UseMovieDetailsState {
  movie: MovieDetails | null
  loading: boolean
  error: string | null
}

export const useMovieDetails = (movieId: number | undefined) => {
  const [state, setState] = useState<UseMovieDetailsState>({
    movie: null,
    loading: true,
    error: null,
  })

  const fetchMovieDetails = async (id: number) => {
    setState({ movie: null, loading: true, error: null })

    try {
      const movieDetails = await movieService.getMovieDetails(id)
      setState({
        movie: movieDetails,
        loading: false,
        error: null,
      })
    } catch (error) {
      setState({
        movie: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch movie details',
      })
    }
  }

  const retry = () => {
    if (movieId) {
      fetchMovieDetails(movieId)
    }
  }

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId)
    } else {
      setState({
        movie: null,
        loading: false,
        error: 'No movie ID provided',
      })
    }
  }, [movieId])

  return {
    ...state,
    retry,
  }
}
