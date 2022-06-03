import {React, useState} from 'react'
import { useSelector } from 'react-redux'
import { getCategoriesPost } from './Functions'
import Search from './Search'

const CategoriesRightSide = ({ category }) => {

  const { allPostsReducer } = useSelector(state => state)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      {
        getCategoriesPost(allPostsReducer, category, search)
      }
    </div>
  )
}

export default CategoriesRightSide