import React from 'react'

const CategoriesLeftSide = ({ handleCategory }) => {
  const handleClick = (e) => {
    handleCategory(e)

    document.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active')
      e.target.classList.add('active')
    })
  }
  return (
    <div className='w-100 selectCategory'>
      <ul className='list-unstyled '>
        <li><button id='' className='btn btn-outline-dark mb-1 mb-sm-2 border-0 active' onClick={(e) => handleClick(e)} >All</button></li>
        <li><button id='Politics' className='btn btn-outline-dark mb-1 mb-sm-2 border-0' onClick={(e) => handleClick(e)} >POLITICS</button></li>
        <li><button id='Business' className='btn btn-outline-dark mb-1 mb-sm-2 border-0' onClick={(e) => handleClick(e)} >BUSINESS</button></li>
        <li><button id='Health' className='btn btn-outline-dark mb-1 mb-sm-2 border-0' onClick={(e) => handleClick(e)} >HEALTH</button></li>
        <li><button id='Design' className='btn btn-outline-dark mb-1 mb-sm-2 border-0' onClick={(e) => handleClick(e)} >DESIGN</button></li>
        <li><button id='Sport' className='btn btn-outline-dark border-0' onClick={(e) => handleClick(e)} >SPORT</button></li>
      </ul>
    </div>
  )
}

export default CategoriesLeftSide