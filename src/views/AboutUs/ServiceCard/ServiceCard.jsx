import React from 'react';


import './ServiceCard.scss';
const ServiceCard = ({img, title, description, icon, reverse}) => {
    return (
        <div className={`service-card ${reverse}`}>
            <div className="img">
                <img src={img} alt={title} />
            </div>

            <div className="service-info">
                <img src={icon} alt={`Service ${title}`} />
                <h3 className='title'>{title}</h3>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard;