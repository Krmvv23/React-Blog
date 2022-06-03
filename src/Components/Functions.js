import CardFlex from "./CardFlex"
import CardColumn from './CardColumn'
import Post from "./Post"
import slug from 'slug'
import { getAuth, signOut } from "firebase/auth";
import { onlineUser } from './actions'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


export const getPosts = (posts) => {
    return Object.entries(posts).map((item, index) => {
        const category = item[0]
        const obj = item[1]
        const writer = Object.keys(obj)[0]
        const posts = Object.values(obj)[0]
        return Object.entries(posts).map((item, i) => {
            const title = item[0]
            const post = item[1].post
            const img = item[1].img
            return <CardFlex key={title} category={category} title={title} post={post} img={img} writer={writer} />
        })
    })
}

export const getSlider = (posts) => {
    return Object.values(posts).map(item => {
        return Object.values(item).map(item => {
            var title = Object.keys(item)
            return Object.values(item).map((item, index) => {
                return (
                    <div key={title} className='carouselItem'>
                        <img src={item.img} className='h-100 w-100' />
                        <h2>{title}</h2>
                    </div>
                )
            })
        })
    })
}

export const getSlug = (posts, postId) => {
    return Object.entries(posts).map(posts => {
        const categories = posts[0]
        const obj = posts[1]
        return Object.entries(obj).map(item => {
            const writer = item[0]
            const post = item[1]
            return Object.entries(post).map(item => {
                const title = item[0]
                const img = item[1].img
                const text = item[1].post
                return slug(title) == postId && <Post key={title} categories={categories} writer={writer} title={title} img={img} text={text} />
            })
        })
    })
}

export const getCategoriesPost = (posts, category = '', search = '') => {
    return Object.entries(posts).map(posts => {
        const categories = posts[0]
        const cod = Object.entries(posts[1]).map(item => {
            const writer = item[0]
            const post = item[1]
            return Object.entries(post).map(item => {
                const title = item[0].toUpperCase()
                const img = item[1].img
                const text = item[1].post
                return search == '' ? <CardColumn key={title} categories={categories} writer={writer} title={title} img={img} post={text} /> :
                    title.includes(search.toUpperCase()) && <CardColumn key={title} categories={categories} writer={writer} title={title} img={img} post={text} />
            })
        })
        return category == '' ? cod :
            category == categories && cod
    })
}

export const getProfilePosts = (posts, writers) => {
    return Object.entries(posts).map(posts => {
        const categories = posts[0]
        const obj = posts[1]
        return Object.entries(obj).map(item => {
            const writer = item[0]
            const post = item[1]
            return Object.entries(post).map(item => {
                const title = item[0]
                const img = item[1].img
                const text = item[1].post
                return writers == writer && <CardColumn key={title} categories={categories} writer={writer} title={title} img={img} post={text} />
            })
        })
    })
}

export const logOut = (navigate, dispatch) => {
    
    const auth = getAuth();
    signOut(auth).then(() => {
        navigate('/')
        dispatch(onlineUser({}))
    })
}