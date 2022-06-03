import { React, useState } from 'react'
import Logo from '../Img/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { onlineUser } from './actions';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Registration = ({ }) => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth();


    const handlesubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: displayName,
                    photoURL: "https://yapikurumsal.com.tr/wp-content/uploads/2021/04/avatar-empty.png"
                }).then(() => dispatch(onlineUser(auth.currentUser)))
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }
    return (
        <div className='Login d-flex flex-column justify-content-center align-items-center'>
            <div>
                <div className='d-flex justify-content-between align-items-end mb-3'>
                    <h2>Registration</h2>
                    <Link to='/' ><img src={Logo} className='loginLogo' /></Link>
                </div>
                <form className="ui form " to='/login' onSubmit={(e) => handlesubmit(e)}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="first-name" onInput={e => setDisplayName(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" onInput={e => setEmail(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" onInput={e => setPassword(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="repassword" />
                    </div>
                    <div className="field">
                        <Link to='/login' className='text-dark'>Login</Link>
                    </div>
                    <button className="btn btn-outline-dark w-100" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Registration