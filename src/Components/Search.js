import React from 'react'


const Search = ({ handleSearch }) => {
    return (
        <div className='mb-5'>
            <input type='search' placeholder='Search...' className='w-100 py-2 px-2 rounded border' style={{ outline: 'none' }}
                onChange={(e) => handleSearch(e)} />
        </div>
    )
}

export default Search