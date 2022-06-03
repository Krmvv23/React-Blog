import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import slug from 'slug';
import {useMediaQuery} from 'react-responsive'

const CardFlex = ({ category, title, img, post, writer }) => {

    var textLength;
    const sm = useMediaQuery({maxWidth:575})
    
    sm ?textLength = 20 :textLength = 50
    const txt = post.split(' ').slice(0,textLength).join(' ')

    return (
        <div>
            <Fade bottom >
                <Link to={'/' + slug(title)}>
                    <div className='position-relative  postCard bg-light d-flex alig-items-center mb-4 rounded w-100'>
                        <img src={img} className='h-100 w-100 rounded' />
                        <div className='position-absolute cbt px-3 px-md-5 py-4 d-flex flex-column justify-content-between'>
                            <div>
                                <p className='small bg-dark d-inline-block p-2 text-light text-capitalize'>{category}</p>
                                <h1 className='m-0 text-capitalize text-dark'>{title}</h1>
                            </div>
                            <div className='p-0 fw-bold text-muted cardTxt w-100 text-capitalize' dangerouslySetInnerHTML={{ __html: txt+'...' }}></div>
                            <div>
                                <p className='text-capitalize text-muted'> - By {writer}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </Fade>
        </div>
    )
}

export default CardFlex