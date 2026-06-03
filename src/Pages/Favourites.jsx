import React from 'react'
import { useFavourite } from '../context/FavouriteContext'
import MovieCard from '../components/MovieCard'

const Favourites = () => {
  const {favourites} = useFavourite()
  console.log(favourites)
  return (
    <div className="mt-7 px-10">
      <h1 className='text-center text-4xl font-bold'>My Favourite Movies</h1>
      <div>
        {/* Favourite movie cards will go here */}
        {favourites.length === 0 ? (
          <p className='text-center text-gray-500 mt-20'>You have no favourite movies yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {favourites.map((movie) => (
              <MovieCard key={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} imdbID={movie.imdbID} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourites
