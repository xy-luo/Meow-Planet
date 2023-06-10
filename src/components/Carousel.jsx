import Button from "../components/Button";
import "../css/Carousel.css"

import { useState, useEffect } from 'react';


function Carousel({ children }) {
    const [index, setIndex] = useState(0);
    let count = children.length;

    const renderCarouselItem = () => {
        return children.map((child) => {
            return (
                <div
                    className='carousel-img-item'
                >
                    {child}
                </div>
            )
        });
    };

    const renderIndexBlock = () => {
        return children.map((child, idx) => {
            return (
                <li className={`index-block ${idx === -index ? "sig" : ""}`}>
                    <Button className="index-button" ariaLabel="jump to the img with corresponding index" onClick={ () => setIndex(-idx) }> </Button>
                </li>
            )
        });
    }

    // autoplay: cancel in this final project
    // useEffect(() => {
    //     const intervalImgs = setInterval(() => {
    //         setIndex(idx => 1 - idx >= count ? 0 : idx - 1);
    //     }, 3000);

    //     return () => clearInterval(intervalImgs);
    // }, []);


    return (
        <div className='carousel-board'>
            {/* prev img button */}
            <Button
                className={`carousel-button prev-button ${index === 0 ? "disable" : ""}`}
                ariaLabel="click to to see the previous image"
                onClick={
                    () => {
                        let newIndex = index + 1;
                        if (newIndex >= 0) {
                            newIndex = 0;
                        }
                        if (-newIndex >= count) {
                            newIndex = -(count - 1);
                        }
                        setIndex(newIndex);
                    }}
                disabled={index === 0 ? true : false}
            >
                <i className="gg-chevron-left"></i>
            </Button>

            {/* carousel display board */}
            <div className="carousel-wrapper">
                <div
                    className='carousel-frame'
                >
                    <div
                        className='imgs-wrapper'
                        style={{
                            transform: `translateX(${index * 500}px)`
                        }}
                    >
                        {renderCarouselItem()}
                    </div>
                </div>
                <ul className="carousel-index-wrapper">
                    {renderIndexBlock()}
                </ul>
            </div>

            {/* next img button */}
            <Button
                className={`carousel-button nxt-button ${-index === count - 1 ? "disable" : ""}`}
                ariaLabel="click to see the next image"
                onClick={
                    () => {
                        let newIndex = index - 1;
                        if (newIndex >= 0) {
                            newIndex = 0;
                        }
                        if (-newIndex >= count) {
                            newIndex = -(count - 1);
                        }
                        setIndex(newIndex);
                    }}
                disabled={-index === count ? true : false}
            >
                <i className="gg-chevron-right"></i>
            </Button>
        </div>);
}

export default Carousel;