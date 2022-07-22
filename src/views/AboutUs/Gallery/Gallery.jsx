import React from 'react';

import './Gallery.scss';
import item1 from '../../../asstes/img/about-us-background.png'
import item2 from '../../../asstes/img/sillas/silla-1.jpg'
import item3 from '../../../asstes/img/category.jpg'
import item4 from '../../../asstes/img/desk.jpg'
import item5 from '../../../asstes/img/services.jpg'
import item6 from '../../../asstes/img/mesas/mesa-2.jpg'
import item7 from '../../../asstes/img/sillas/silla-1.jpg';
import item8 from '../../../asstes/img/escritorios/escritorio-1.jpg';

const gridItems = [
    {
        name: "item-1",
        img: item1
    },
    {
        name: "item-2",
        img: item2
    },
    {
        name: "item-3",
        img: item3
    },
    {
        name: "item-4",
        img: item4
    },
    {
        name: "item-5",
        img: item5
    },
    {
        name: "item-6",
        img: item6
    },
    {
        name: "item-7",
        img: item7
    },
    {
        name: "item-8",
        img: item8
    }
]

const GridItem = ({img, className}) => {
    return (
        <figure className={`grid-item ${className}`}>
            <img src={img} className="gallery-img" alt="" />
        </figure>
    )
}

const Gallery = () => {
    return (
        <div className="gallery">
            <h3 className='title'>Dale un vistazo a nuestra galería</h3>

            <div className="grid">
                {gridItems.map((item) => 
                    <GridItem key={item.name} img={item.img} className={item.name} />
                )}
            </div>
        </div>
    )
}

export default Gallery;