import React , { useState , useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import ErrorMessage from '../components/ErrorMessage'
import { SearchMovies } from '../services/MovieApi'
import Loader from '../components/Loader'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('batman')

useEffect(() => {
    setLoading(true)
    SearchMovies(query)
      .then(data => {
        setMovies(data.Search || [])
        setError(null)
      })
      .catch(err => {
        setError(err.message || 'Failed to fetch movies. Please try again.')
        setMovies([])
      })
      .finally(() => setLoading(false))
},[query])


  return (
    <main>
      <SearchBar onSearch={setQuery} />
        <h1 className='px-10 text-2xl font-bold mt-5'>{query} Searches</h1>
      <div>
        {/* Movie cards will go here */}
        {loading ? (
          <Loader />
        ) : error || movies.length === 0 ? (
          <ErrorMessage />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} imdbID={movie.imdbID} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
