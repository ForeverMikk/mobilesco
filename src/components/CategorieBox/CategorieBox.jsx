import React from 'react';

import './CategorieBox.scss';
import defaultImg from '../../asstes/img/defaultImg.png';

const CategorieBox = ({items ,title})=> {

    return (
        <div className='box'>
            <div className="img-grid">
                {items.map(({data, images}, index) => (
                    <div className="img" key={index}>
                        {images.length > 0 
                            ? <img src={`https://mobilesco.mx/API/images/uploads/${data.CLAVE}/${images[0].NOMBRE}`} alt={data.NOMBRE} />       
                            : <img src={defaultImg} alt="Default"/>
                        }
                    </div>
                ))}
            </div>

            <div className="data">
                <p>{title}</p>
                <button>Ver más</button>
            </div>

        </div>
    )
}

export default CategorieBox;