import React from 'react'
import { useSelector } from 'react-redux'
import { getProfilePosts } from './Functions'

const ProfRightSide = () => {
  const { allPostsReducer, onlineUserReducer } = useSelector(state => state)
  return (
    <div className='col-md-9 profRight' >
      {
        getProfilePosts(allPostsReducer, onlineUserReducer.displayName)
      }

    </div>
  )
}

export default ProfRightSide