import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Img/logo.svg'
import { useDispatch } from 'react-redux'
import { onlineUser } from './actions'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(onlineUser(user))
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <div className='Login d-flex flex-column justify-content-center align-items-center'>
            <div>
                <div className='d-flex justify-content-between align-items-end mb-3'>
                    <h2>Login</h2>
                    <Link to='/' ><img src={Logo} className='loginLogo' /></Link>
                </div>
                <form className="ui form " onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="field">
                        <label>Email</label>
                        <input type="Email" name="email" onChange={getEmail} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" onChange={getPassword} />
                    </div>
                    <div className="field">
                        <Link to='/signup' className='text-dark'>Registration</Link>
                    </div>
                    <button className="btn btn-outline-dark w-100 text-center" type="submit">
                        <span>Submit</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login