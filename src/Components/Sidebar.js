import React from 'react'
import Search from './Search'
import Tags from './Tags'

const Sidebar = () => {
  return (
    <div className='col-md-3'>
      <Search />
      <Tags />
    </div>
  )
}

export default Sidebar