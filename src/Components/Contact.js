import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()

  return (
    <div className='contact container py-5'>

      <div className='d-flex justify-content-center'>
        <form className="row g-3" onSubmit={(e) => {
          e.preventDefault()
          navigate('/')
        }}>

          <div className="col-md-6">
            <label htmlFor="nameInp" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInp" />
          </div>

          <div className="col-md-6">
            <label htmlFor="emailInp" className="form-label">Email</label>
            <input type="email" className="form-control" id="emailInp" />
          </div>

          <div className="col-md-12">
            <label htmlFor="textarea" className="form-label">Message</label>
            <textarea type="password" className="form-control contact-textarea" id="textarea" />
          </div>

          <div className="col-12 text-end">
            <button type="submit" className="btn btn-outline-dark">Sign in</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact