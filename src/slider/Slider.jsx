import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './slider.css';

const Slider = () => {

    const SliderData = [
        {
          image:
            'https://woodmizer.in/media/wysiwyg/WM-USA/Footer/bg-desktop-footer.jpg'
        },
        {
          image:
            'https://woodmizer.in/media/.renditions/wysiwyg/WM-Asia/IN/Hero/IndiaSlider1_1920x720.jpg'
        },
        {
          image:
            'https://woodmizer.in/media/.renditions/wysiwyg/WM-Asia/IN/Hero/IndiaSlider2_1920x720.jpg'
        },
        {
          image:
            'https://woodmizer.in/media/.renditions/wysiwyg/WM-Australia/LX50sLaunchOceania1920x720desk_1.jpg'
        }
      ];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === SliderData.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? SliderData.length - 1 : prev - 1));
    };

    const handleDotClick = (index) => {
        setCurrent(index);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [current]);

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => (
                <div
                    className={`slide ${index === current ? 'active' : ''}`}
                    key={index}
                >
                    <img src={slide.image} alt='travel image' className='image' />
                </div>
            ))}
            <div className='dots'>
                {SliderData.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Slider;
