import type { Movie, MovieDetails, MovieResponse } from '../types/movie'

// Mock data for demonstration
const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    overview:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster_path: '/q6y0Go1m4y2UIWNKfQ8VWBQ7A8k.jpg',
    backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
    release_date: '1994-09-23',
    vote_average: 8.7,
    vote_count: 26917,
    genre_ids: [18, 80],
    adult: false,
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    popularity: 88.922,
    video: false,
  },
  {
    id: 2,
    title: 'The Godfather',
    overview:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    release_date: '1972-03-14',
    vote_average: 8.7,
    vote_count: 19567,
    genre_ids: [18, 80],
    adult: false,
    original_language: 'en',
    original_title: 'The Godfather',
    popularity: 149.806,
    video: false,
  },
  {
    id: 3,
    title: 'The Dark Knight',
    overview:
      'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
    release_date: '2008-07-18',
    vote_average: 8.5,
    vote_count: 32513,
    genre_ids: [18, 28, 80, 53],
    adult: false,
    original_language: 'en',
    original_title: 'The Dark Knight',
    popularity: 123.456,
    video: false,
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.",
    poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdrop_path: '/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg',
    release_date: '1994-09-10',
    vote_average: 8.5,
    vote_count: 27437,
    genre_ids: [80, 18],
    adult: false,
    original_language: 'en',
    original_title: 'Pulp Fiction',
    popularity: 65.321,
    video: false,
  },
  {
    id: 5,
    title: 'Forrest Gump',
    overview:
      'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do.',
    poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    backdrop_path: '/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg',
    release_date: '1994-06-23',
    vote_average: 8.5,
    vote_count: 26635,
    genre_ids: [35, 18, 10749],
    adult: false,
    original_language: 'en',
    original_title: 'Forrest Gump',
    popularity: 54.789,
    video: false,
  },
]

const mockMovieDetails: Record<number, MovieDetails> = {
  1: {
    ...mockMovies[0],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 80, name: 'Crime' },
    ],
    runtime: 142,
    budget: 25000000,
    revenue: 16000000,
    status: 'Released',
    tagline: 'Fear can hold you prisoner. Hope can set you free.',
    homepage: null,
    imdb_id: 'tt0111161',
    production_companies: [],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    spoken_languages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
  },
  2: {
    ...mockMovies[1],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 80, name: 'Crime' },
    ],
    runtime: 175,
    budget: 6000000,
    revenue: 245066411,
    status: 'Released',
    tagline: "An offer you can't refuse.",
    homepage: null,
    imdb_id: 'tt0068646',
    production_companies: [],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    spoken_languages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
  },
  3: {
    ...mockMovies[2],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 28, name: 'Action' },
      { id: 80, name: 'Crime' },
      { id: 53, name: 'Thriller' },
    ],
    runtime: 152,
    budget: 185000000,
    revenue: 1005973645,
    status: 'Released',
    tagline: 'Why So Serious?',
    homepage: null,
    imdb_id: 'tt0468569',
    production_companies: [],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    spoken_languages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
  },
  4: {
    ...mockMovies[3],
    genres: [
      { id: 80, name: 'Crime' },
      { id: 18, name: 'Drama' },
    ],
    runtime: 154,
    budget: 8000000,
    revenue: 214179088,
    status: 'Released',
    tagline: "Just because you are a character doesn't mean you have character.",
    homepage: null,
    imdb_id: 'tt0110912',
    production_companies: [],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    spoken_languages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
  },
  5: {
    ...mockMovies[4],
    genres: [
      { id: 35, name: 'Comedy' },
      { id: 18, name: 'Drama' },
      { id: 10749, name: 'Romance' },
    ],
    runtime: 142,
    budget: 55000000,
    revenue: 677387716,
    status: 'Released',
    tagline: "Life is like a box of chocolates... you never know what you're gonna get.",
    homepage: null,
    imdb_id: 'tt0109830',
    production_companies: [],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    spoken_languages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
  },
}

class MovieService {
  private async simulateNetworkDelay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000))
  }

  async getPopularMovies(page = 1): Promise<MovieResponse> {
    try {
      await this.simulateNetworkDelay()

      // Simulate occasional errors for testing error handling
      if (Math.random() < 0.1) {
        throw new Error('Network error')
      }

      return {
        page,
        results: mockMovies,
        total_pages: 10,
        total_results: 50,
      }
    } catch (error) {
      throw new Error(`Failed to fetch popular movies: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  async getMovieDetails(movieId: number): Promise<MovieDetails> {
    try {
      await this.simulateNetworkDelay()

      // Simulate occasional errors for testing error handling
      if (Math.random() < 0.1) {
        throw new Error('Network error')
      }

      const movieDetails = mockMovieDetails[movieId]
      if (!movieDetails) {
        throw new Error('Movie not found')
      }

      return movieDetails
    } catch (error) {
      throw new Error(`Failed to fetch movie details: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  async searchMovies(query: string, page = 1): Promise<MovieResponse> {
    try {
      await this.simulateNetworkDelay()

      // Simulate occasional errors for testing error handling
      if (Math.random() < 0.1) {
        throw new Error('Network error')
      }

      const filteredMovies = mockMovies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase()) ||
          movie.overview.toLowerCase().includes(query.toLowerCase())
      )

      return {
        page,
        results: filteredMovies,
        total_pages: 1,
        total_results: filteredMovies.length,
      }
    } catch (error) {
      throw new Error(`Failed to search movies: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  getImageUrl(path: string | null, size = 'w500'): string {
    if (!path) return '/placeholder-movie.jpg'
    return `https://image.tmdb.org/t/p/${size}${path}`
  }
}

export const movieService = new MovieService()
