import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className='container mt-3'>
        <ul className='list-unstyled d-flex navBar'>
          <li><Link to='/' >HOME</Link></li>
          <li><Link to='/categories' >CATEGORIES</Link></li>
          <li><Link to='/contact' >CONTACT</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar