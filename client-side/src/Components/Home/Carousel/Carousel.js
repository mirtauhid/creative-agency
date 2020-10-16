import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import slideOne from '../../../images/carousel-1.png';
import slideTwo from '../../../images/carousel-2.png';
import slideThree from '../../../images/carousel-3.png';

const Carousel = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slide-container">
            <Slider {...settings}>
                <div fill>
                    <img src={slideOne} alt="" />
                </div>
                <div>
                    <img src={slideTwo} alt="" />
                </div>
                <div>
                    <img src={slideThree} alt="" />
                </div>
                <div>
                    <img src={slideOne} alt="" />
                </div>
                <div>
                    <img src={slideTwo} alt="" />
                </div>
                <div>
                    <img src={slideThree} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;