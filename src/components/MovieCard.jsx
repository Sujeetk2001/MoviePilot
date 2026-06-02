import React from 'react'

const MovieCard = ({Title,Year,Poster}) => {
    
  return (
    <div className="rounded-lg shadow-md overflow-hidden relative cursor-pointer">
      <img src={Poster} alt={Title} className='max-w-lg w-full max-h-lg hover:scale-120 transition-all duration-300 ease-in-out'/>
      <div className='p-4 bg-black/95 text-white absolute bottom-0 left-0 right-0'>
        <h3 className='text-center'>{Title}</h3>
        <p className='text-center'>{Year}</p>
      </div>
    </div>
  )
}

export default MovieCard
