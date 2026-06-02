import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { MoviesDetails } from '../services/MovieApi'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

const MovieDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    MoviesDetails(id)
      .then(data => {
        setMovie(data)
        setError(null)
      })
      .catch(err => setError(err.message || 'Failed to fetch movie details.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="mt-20"><Loader /></div>
  if (error || !movie) return <ErrorMessage />

  return (
    <div className="relative min-h-screen w-full bg-[#07070a]">
      {/* Background Poster Blur Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 blur-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.Poster !== 'N/A' ? movie.Poster : ''})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-20">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition cursor-pointer font-semibold uppercase tracking-wider text-sm"
        >
          &larr; Back to Results
        </button>
        
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Poster Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
            <img 
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'} 
              alt={movie.Title} 
              className="w-full rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-gray-800"
            />
          </div>
          
          {/* Details Section */}
          <div className="w-full md:w-2/3 flex flex-col gap-6 pt-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
              {movie.Title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-300">
              <span className="text-yellow-500 flex items-center gap-1 text-base">
                ⭐ {movie.imdbRating}
              </span>
              <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
              <span>{movie.Year}</span>
              <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
              <span className="border border-gray-500 px-2 py-0.5 rounded text-xs">{movie.Rated}</span>
              <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
              <span>{movie.Runtime}</span>
            </div>
            
            <p className="text-lg text-yellow-500 font-medium italic">
              {movie.Genre}
            </p>
            
            <div className="mt-2">
              <h3 className="text-xl font-bold mb-3 text-white">Overview</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl opacity-90">
                {movie.Plot}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 pt-8 border-t border-gray-800/60">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Director</p>
                <p className="text-white font-medium text-lg">{movie.Director}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Cast</p>
                <p className="text-white font-medium text-lg">{movie.Actors}</p>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
               <button className="primaryBtn">
                  + Add to Favourites
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
