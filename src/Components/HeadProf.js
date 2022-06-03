import React from 'react'
import { useSelector } from 'react-redux'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { onlineUser } from './actions'
import { useMediaQuery } from 'react-responsive'
import {logOut} from './Functions'

const HeadProf = () => {
    const { onlineUserReducer } = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sm = useMediaQuery({ minWidth: 576 })

    const clickHandle = () => {
        document.querySelector('.headProf-subtitle').classList.toggle('d-none')
    }

    return (
        <div className='d-flex flex-column align-items-center justify-content-center headProf'>
            <div className='mb-2 rounded-circle profImg' style={{ objectFit: 'cover' }}>
                <img src={onlineUserReducer.photoURL} className='rounded-circle shadow h-100 w-100' />
            </div>
            <div className='position-relative bt d-flex flex-column justify-content-center ' >
                <div className='d-flex align-items-center' onClick={()=>sm && clickHandle()} style={{ cursor: 'pointer' }}>
                    <p className=' m-0 p-0 me-2 fw-bolder h6'>{onlineUserReducer.displayName}</p>
                    <FontAwesomeIcon icon={faAngleDown} className='d-none d-sm-block' />
                </div>
                <div className=' headProf-subtitle shadow rounded d-none'>
                    <ul className='list-unstyled m-0 p-0 h-100 w-100'>
                        <li className='w-100 py-1 px-3 mb-1'><Link to='/profile' onClick={clickHandle}>Profile</Link></li>
                        <li className='w-100 py-1 px-3 mb-1'><Link to='/addpost' onClick={clickHandle}>Add Post</Link></li>
                        <li className='w-100 py-1 px-3 mb-1'><Link to='/' onClick={() => logOut(navigate,dispatch)}>Log Out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeadProf