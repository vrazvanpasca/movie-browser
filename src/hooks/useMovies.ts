import { useState, useEffect } from 'react'
import type { Movie, MovieResponse } from '../types/movie'
import { movieService } from '../services/movieService'

interface UseMoviesState {
  movies: Movie[]
  loading: boolean
  error: string | null
  totalPages: number
  currentPage: number
}

export const useMovies = (initialPage = 1) => {
  const [state, setState] = useState<UseMoviesState>({
    movies: [],
    loading: true,
    error: null,
    totalPages: 0,
    currentPage: initialPage,
  })

  const fetchMovies = async (page = 1) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const response: MovieResponse = await movieService.getPopularMovies(page)
      setState({
        movies: response.results,
        loading: false,
        error: null,
        totalPages: response.total_pages,
        currentPage: page,
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch movies',
      }))
    }
  }

  const searchMovies = async (query: string, page = 1) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const response: MovieResponse = await movieService.searchMovies(query, page)
      setState({
        movies: response.results,
        loading: false,
        error: null,
        totalPages: response.total_pages,
        currentPage: page,
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to search movies',
      }))
    }
  }

  const retry = () => {
    fetchMovies(state.currentPage)
  }

  useEffect(() => {
    fetchMovies(initialPage)
  }, [initialPage])

  return {
    ...state,
    fetchMovies,
    searchMovies,
    retry,
  }
}
