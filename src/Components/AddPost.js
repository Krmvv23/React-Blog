import { React, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { initializeApp } from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const AddPost = ({ addPost }) => {

    const firebaseConfig = {
        apiKey: "AIzaSyDGCsO6NvWb82XPuSssGd71OyV6t5HC_6o",
        authDomain: "reactblogweb.firebaseapp.com",
        projectId: "reactblogweb",
        storageBucket: "reactblogweb.appspot.com",
        messagingSenderId: "401331318303",
        appId: "1:401331318303:web:ff80979e6065f069cdaf2a",
        measurementId: "G-92E607VEPV"
    };


    const { onlineUserReducer } = useSelector(state => state)

    const [newPost, setNewPost] = useState()
    const [postTitle, setPostTitle] = useState('')
    const [category, setCategory] = useState('')
    const [img, setImg] = useState()

    const navigate = useNavigate()

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app)

    return (
        <div className='container py-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h2>New Post</h2>
                <div>
                    <FontAwesomeIcon icon={faGear} className='h4' />
                </div>
            </div>
            <input className='postTitleInp w-100 py-5 px-4 h1 border-0' placeholder='Add Title...' onChange={e => setPostTitle(e.target.value)} />
            <div className='mb-5'>
                <select className="form-select mb-3" defaultValue='Other' aria-label="Default select example" onChange={e => setCategory(e.target.value)}>
                    <option disabled>Select category</option>
                    <option value='Politics'>Politics</option>
                    <option value="Business">Business</option>
                    <option value="Health">Health</option>
                    <option value="Design">Design</option>
                    <option value="Sport">Sport</option>
                    <option value="Other">Other</option>
                </select>

                <div className='d-flex flex-column align-items-center'>
                    <img src={img} className='feature-img d-none' />
                    <span className='featureImg-spin spinner-border text-primary d-none'></span>
                    <input type='file' className='feature-img-inp' onInput={e => {
                        const file = e.target.files[0]
                        const storageRef = ref(storage, `/Images/${onlineUserReducer.uid}/${file.name}`)
                        const span = document.querySelector('.featureImg-spin')
                        const imgEl = document.querySelector('.feature-img')
                        span.classList.remove('d-none')
                        imgEl.classList.add('d-none')

                        uploadBytesResumable(storageRef, file).then((snapshot) => {
                            getDownloadURL(ref(storage, `Images/${onlineUserReducer.uid}/${file.name}`)).then((url) => {
                                setTimeout(() => {
                                    imgEl.classList.remove('d-none')
                                    span.classList.add('d-none')
                                    setImg(url)
                                }, 2000);
                            })
                        });

                    }} />
                </div>

            </div>

            <CKEditor
                editor={ClassicEditor}
                data="<p></p><p></p>"
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setNewPost(data)
                }}
            />
            <div className='text-end mt-3'>
                <button className='btn btn-outline-dark' onClick={() => {
                    addPost(category, onlineUserReducer.displayName, postTitle, newPost, img)
                    navigate('/profile')
                }}>Save</button>

            </div>
        </div>
    )
}

export default AddPost