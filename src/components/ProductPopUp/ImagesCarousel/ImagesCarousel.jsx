import React from 'react';

import './ImagesCarousel.scss';

const ImagesCarousel = ({id, images, setMainImage}) => {
    return (
        <div className='images-carousel'>
            {images.map((img, index) => (
                <button 
                    key={index} 
                    // onClick={() => {setMainImage(`https://mobilesco.mx/API/images/uploads/${id}/${img.NOMBRE}`)}}
                    onMouseEnter={() => {setMainImage(`https://mobilesco.mx/API/images/uploads/${id}/${img.NOMBRE}`)}}
                >
                    <img 
                        src={`https://mobilesco.mx/API/images/uploads/${id}/${img.NOMBRE}`} 
                        alt={`${img.MUEBLE} ${img.CLAVE_COLOR}`} 
                    />
                </button>
            ))}
        </div>
    )
}

export default ImagesCarousel;