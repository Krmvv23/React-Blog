import React from 'react'

const Post = ({ categories, writer, title, img, text }) => {
 
  return (
    <div className='container post pt-4'>
      <div className='post-img'>
        <img src={img} className='h-100 w-100' />
      </div>
      <div className='my-5'>
        <p className='p-0 mb-2 bg-dark text-light px-3 py-2 fw-bold d-inline-block'>{categories}</p>
        <h1 className='m-0 p-0'>{title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
      <h4 className='text-end text-capitalize fw-bold'><em>~ By {writer}</em></h4>
    </div>
  )
}

export default Post