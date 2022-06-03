import React from 'react'
import ProfLeftSide from './ProfLeftSide'
import ProfRightSide from './ProfRightSide'

const Profile = () => {
  return (
    <div className='container h-100'>
      <div className='row h-100 pt-4'>
        <ProfLeftSide />
        <ProfRightSide />
      </div>
    </div>

  )
}

export default Profile