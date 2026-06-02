const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'http://www.omdbapi.com/'

export const fetchMovies = async (query)=>{
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&${query}`);
    

    const data = await response.json();

    if(data.Response === "False"){
        throw new Error(data.Error);
    }
    return data
};

export const SearchMovies = async (query, page = 1)=>
    fetchMovies(`s=${query}&page=${page}`)


export const MoviesDetails = (movieId)=> fetchMovies(`i=${movieId}&plot=full`)