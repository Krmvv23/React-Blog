import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Img/slider.webp'


const HomeAbout = () => {
    return (
        <div className='container py-5 homeabout'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 h-100'>
                <div className='col pt- h-100 d-flex flex-column justify-content-center justify-content-md-start'>
                    <div className='mb-2'>
                        <p className='mb-1 small text-muted'>LIFESTYLE</p>
                        <h2 className='m-0'>Welcome to this Lifestyle blog</h2>
                    </div>
                    <p className='p-0 fw-bold text-muted'>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor id ultricies dictum</p>
                </div>
                <div className='col d-none d-md-block h-100 '>
                    <img src={image} className='h-100 w-100 rounded' />
                </div>
                <div className='col d-none d-lg-block h-100 '>
                    <img src={image} className='h-100 w-100 rounded' />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout