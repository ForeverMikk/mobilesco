import React from 'react';

import './CategorieBox.scss';

const CategorieBox = ({items ,title})=> {
    return (
        <div className='box'>
            <div className="img-grid">
                <img src={items[0]} alt="" />       
                <img src={items[1]} alt="" />       
                <img src={items[2]} alt="" />       
                <img src={items[3]} alt="" />
            </div>

            <div className="data">
                <p>{title}</p>
                <button>Ver más</button>
            </div>

        </div>
    )
}

export default CategorieBox;