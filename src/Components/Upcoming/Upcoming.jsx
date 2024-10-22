import React, { useEffect, useRef, useState } from 'react'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'

const Upcoming = () => {
    const slidesContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3;

    const moveSlider = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex >= totalSlides) {
                const slidesContainer = slidesContainerRef.current;
                slidesContainer.style.transition = 'none';
                slidesContainer.style.transform = `translateX(0)`;
                newIndex = 1;
                setTimeout(() => {
                    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
                    slidesContainer.style.transform = `translateX(-${newIndex * 100}%)`;
                }, 20);
            } else {
                slidesContainerRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
            }
            return newIndex;
        });
    };

    useEffect(() => {
        const intervalId = setInterval(moveSlider, 3000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="banner">
            <div className="container">
                <div className="slider">
                    <div className="slides-container" ref={slidesContainerRef}>
                        <div className="slide slide_1">
                            <img
                                className="slide_img"
                                id="slide_img_1"
                                src={banner1}
                                alt="Banner 1"
                            />
                        </div>
                        <div className="slide slide_2">
                            <img
                                className="slide_img"
                                id="slide_img_2"
                                src={banner2}
                                alt="Banner 2"
                            />
                        </div>
                        <div className="slide slide_1">
                            <img
                                className="slide_img"
                                id="slide_img_3"
                                src={banner1}
                                alt="Banner 1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
