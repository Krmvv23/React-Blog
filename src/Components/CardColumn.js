import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import slug from 'slug';
import {useMediaQuery} from 'react-responsive'


const CardColumn = ({ categories, writer, title, img, post }) => {
    var textLength;
    const sm = useMediaQuery({maxWidth:575})
    
    sm ?textLength = 20 :textLength = 50
    const txt = post.split(' ').slice(0,textLength).join(' ')

    return (
        <Fade bottom >
            <Link to={'/'+slug(title)}>
                <div className='d-flex flex-column mb-5 shadow rounded'>
                    <div className='d-flex flex-column alig-items-center card-column'>
                        <div className='card-img '>
                            <img src={img} className='h-100 w-100 rounded' />
                        </div>
                        <div className=' p-3 p-sm-4 d-flex flex-column justify-content-between bg-light'>
                            <div className='text-dark'>
                                <p className='mb-1 small text-muted text-capitalize'>{categories}</p>
                                <h2 className='m-0 text-capitalize'>{title}</h2>
                            </div>
                            <div className='mb- p-0 fw-bold text-muted cardTxt text-capitalize my-2 my-sm-4 d-none d-sm-block' dangerouslySetInnerHTML={{ __html: txt }} ></div>
                            <div>
                                <p className='text-capitalize text-dark d-none d-sm-block'>By {writer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Fade>

    )
}

export default CardColumn