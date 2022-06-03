import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSlug } from './Functions'

const FilterPost = () => {
  let { postId } = useParams()
  const { allPostsReducer } = useSelector(state => state)
  return (
    < div >
      {
        getSlug(allPostsReducer, postId)
      }
    </div >
  )
}

export default FilterPost