import React, { useState } from 'react'
import CategoriesLeftSide from './CategoriesLeftSide'
import CategoriesRightSide from './CategoriesRightSide'
import Search from './Search'

const Categories = () => {
  const [category, setCategory] = useState('')

  const handleCategory = (e) => {
    setCategory(e.target.id)
  }

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col col-3 '>
          <CategoriesLeftSide handleCategory={handleCategory} />
        </div>
        <div className='col col-9'>
          <CategoriesRightSide category={category} />
        </div>
        
      </div>
    </div>

  )
}

export default Categories