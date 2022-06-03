import Header from "./Components/Header";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import Foooter from "./Components/Foooter";
import { useDispatch, useSelector } from 'react-redux'
import { getAuth } from "firebase/auth";
import { onlineUser, allPosts } from "./Components/actions";
import Body from "./Components/Body";
import Backdrop from './Components/Backdrop'

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDGCsO6NvWb82XPuSssGd71OyV6t5HC_6o",
    authDomain: "reactblogweb.firebaseapp.com",
    projectId: "reactblogweb",
    storageBucket: "reactblogweb.appspot.com",
    messagingSenderId: "401331318303",
    appId: "1:401331318303:web:ff80979e6065f069cdaf2a",
    measurementId: "G-92E607VEPV"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase();


  const dispatch = useDispatch()
  const { onlineUserReducer, allPostsReducer } = useSelector(state => state)
  const [isLogged, setIsLogged] = useState(false)
  const auth = getAuth()

  const addPost = (category, token, title, post, img) => {
    set(ref(db, `posts/${category}/${token}/${title}`), {
      post: post,
      img: img
    });
  }


  useEffect(() => {
    onValue(ref(db, 'posts'), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        dispatch(allPosts(data))
      }
    });
      setTimeout(() => {
        const currentUser = auth.currentUser
        currentUser && dispatch(onlineUser(currentUser))
        console.log(currentUser)
      }, 2000);

  }, [])

  window.scrollTo(0, 0);

  return (
    <Router>
      <Header />
      <Body addPost={addPost} />
      <Foooter />
    </Router>
  );
}

export default App;
