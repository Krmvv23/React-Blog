import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from './Functions'

const ProfLeftSide = () => {
    const { onlineUserReducer } = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    return (
        <div className='col-md-3 h-100  py-4 position-sticky top-0 profLeft'>
            <div className='h-100 d-flex flex-column align-items-center'>
                <div className='d-flex flex-column align-items-center'>
                    <div className=' rounded-circle profImg'>
                        <img src={onlineUserReducer.photoURL} className='h-100 w-100 rounded-circle' />
                    </div>
                    <div className='text-center displayName mt-3'>
                        <h2 className='m-0'>{onlineUserReducer.displayName}</h2>
                        <p className='text-muted'>{onlineUserReducer.email}</p>
                    </div>
                </div>

                <div className='mt-4'>
                    <button className='btn  btn-outline-dark' onClick={()=>logOut(navigate,dispatch)}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default ProfLeftSide
