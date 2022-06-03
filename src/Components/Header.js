import React from 'react'
import HeadProf from './HeadProf'
import { Link } from 'react-router-dom'
import Logo from '../Img/logo.svg'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import ResNavbar from './ResNavbar'

const Header = () => {
    const { onlineUserReducer } = useSelector(state => state)
    const sm = useMediaQuery({ maxWidth: 575 })
    return (
        <header className='header border-bottom pt-2'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className='logo'>
                    <img src={Logo} className='h-100 w-100' />
                </div>
                <div className='d-flex align-items-center logBtns'>
                    <div className='me-4'>
                        {
                            sm ? <ResNavbar /> :
                                Object.keys(onlineUserReducer).length == 0 ?
                                    [<Link to='/login' key={0} className='bg-dark text-light px-4 py-3 me-3 rounded'>Login</Link>,
                                    <Link to='/signup' key={1} className='bg-dark text-light px-4 py-3 rounded'>Signup</Link>]
                                    : <HeadProf />
                        }
                    </div>
                </div>
            </div>
            {

                !sm && <Navbar />
            }
        </header>
    )
}

export default Header