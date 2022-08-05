import React from 'react';

import './CategoryCard.scss';
const CategoryCard = ({title, img, description}) => {
    return(
        <div className='category-card'>
            <h3 className='title'>{title}</h3>
            <img src={img} alt={title} />
            <p className="description">{description}</p>
        </div>
    )
}

export default CategoryCard;