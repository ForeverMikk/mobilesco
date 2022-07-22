import React from 'react';

import './PreviewProduct.scss';

const PreviewProduct = ({ img, title, description }) => {
    return (
        <div className='preview-product'>
            <div className="img">
                <img src={img} alt={`${title} preview`} />
            </div>

            <div className="preview-info">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <button className='more'>Ver más</button>
                <button className="remove">Eliminar</button>
            </div>
        </div>
    )
}


export default PreviewProduct;