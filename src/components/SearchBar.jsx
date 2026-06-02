import React, {useState} from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = () => {
        if (searchTerm.trim()) {
            onSearch(searchTerm)
        }
    }
  return (
    <div className='flex justify-center gap-3 my-5 px-10'>
      <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}placeholder="Search movies..." className='w-4xl bg-gray-900 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 px-5 py-2 rounded-md'/>
      <button className='primaryBtn' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
