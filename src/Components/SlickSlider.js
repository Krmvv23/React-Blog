import React from 'react'
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { getSlider } from './Functions';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const SlickSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false

        }
      }

    ]

  };

  const { allPostsReducer } = useSelector(state => state)

  return (
    <div className=' carousel py-5'>
      <Slider {...settings} >
        {
          getSlider(allPostsReducer)
        }
      </Slider>
    </div>
  )
}

export default SlickSlider