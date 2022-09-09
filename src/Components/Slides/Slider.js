import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Sliders from '../../mocks/slidesMock';

const Slider = () => {
    return (
        <Carousel className='max-w-full' autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={700} emulateTouch={true} swipeable={true}>
            {Sliders.map(({name, image}, i) => (
                <div key={i}>
                    <img className='max-h-96 object-cover' src={image} alt={name}/>
                </div>
            ))}
        </Carousel>
    )
}

export default Slider;