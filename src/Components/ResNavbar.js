import React from 'react'
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeadProf from './HeadProf'
import { logOut } from './Functions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ResNavbar = ({ expand = 'sm' }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { onlineUserReducer } = useSelector(state => state)


    return (
        <Navbar key={expand} bg="" expand={expand} className=""  >
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='position-absolute' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='d-flex flex-column justify '>



                    <Nav className='h5 mb-5'>
                        <Link className=' text-dark mb-3' to="/">HOME</Link>
                        <Link className=' text-dark mb-3' to="/categories">CATEGORIES</Link>
                        <Link className=' text-dark' to="/contact">CONTACT</Link>
                        <hr />
                        {
                            Object.keys(onlineUserReducer).length == 0 ?
                                <div className='mt-4'>
                                    <Link to='/login' key={0} className='bg-dark text-light px-4 py-3 me-3 rounded'>Login</Link>
                                    <Link to='/signup' key={1} className='bg-dark text-light px-4 py-3 rounded'>Signup</Link>
                                </div>
                                : [
                                    <Link key={0} className='text-dark mb-3' to="/profile">PROFILE</Link>,
                                    <Link key={1} className='text-dark mb-5' to="/addpost">ADD POST</Link>,
                                    <Button key={2} variant='outline-dark' onClick={() => logOut(navigate, dispatch)}>Log out</Button>
                                ]
                        }
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>

    )
}

export default ResNavbar