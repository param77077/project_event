import React from 'react';
import Slider from 'react-slick'
import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'


const Carrousal = () => {
    const setting = {
        autoplay: true,
        infinite: true,
        dots: true,
        speed: 500,
        cssease: 'linear'

    }

    return (
        <div
            className="carrousal_wrapper"
            style={{
                background: "red",
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}>
            <Slider {...setting}>
                <div>
                    <div
                        className="carrousal_image"
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`,
                            width: `${window.innerWidth}px`
                        }}
                    />
                </div>
                <div>
                    <div
                        className="carrousal_image"
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`,
                            width: `${window.innerWidth}px`
                        }}
                    />
                </div>
                <div>
                    <div
                        className="carrousal_image"
                        style={{
                            background: `url(${slide_three})`,
                            height: `${window.innerHeight}px`,
                            width: `${window.innerWidth}px`
                        }}
                    />
                </div>

            </Slider>

        </div>);
}


export default Carrousal;