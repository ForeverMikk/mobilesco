import React from 'react';

import './ImagesCarousel.scss';

const ImagesCarousel = ({id, images}) => {
    return (
        <div className='images-carousel'>
            {images.map((img, index) => (
                <img 
                    key={index}
                    src={`https://mobilesco.mx/API/images/uploads/${id}/${img.NOMBRE}`} 
                    alt={`${img.MUEBLE} ${img.CLAVE_COLOR}`} 
                />
            ))}
        </div>
    )
}

export default ImagesCarousel;