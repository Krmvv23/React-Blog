import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from "./Home";
import Categories from "./Categories";
import Login from './Login'
import Registration from "./Registration";
import AddPost from "./AddPost";
import Profile from "./Profile";
import FilterPost from "./FilterPost";
import Contact from "./Contact";
import { useSelector } from 'react-redux';


const Body = ({ addPost }) => {
    const { onlineUserReducer } = useSelector(state => state)
    const navigate = useNavigate()

    return (
        <div className='body-area'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Login />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Registration />} />
                <Route path='/addpost' element={Object.values(onlineUserReducer).length > 0 ? < AddPost addPost={addPost} /> : <Login/> } />
                <Route path='/profile' element={Object.values(onlineUserReducer).length > 0 ? < Profile /> : <Login/> } />
                <Route path='/contact' element={<Contact />} />
                <Route path='/:postId' element={<FilterPost />} />
            </Routes>
        </div>

    )
}

export default Body