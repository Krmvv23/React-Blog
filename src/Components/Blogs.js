import { React } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getPosts } from './Functions'

const Blogs = () => {

  const { allPostsReducer } = useSelector(state => state)

  return (
    <div className='col-12'>
      {
        getPosts(allPostsReducer)
      }
      <div className='mt-5'>
        <Link className='read-more' to='/categories'>Read More</Link>
      </div>
    </div>
  )
}

export default Blogs