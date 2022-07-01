import React from 'react';

import './DownloadCatalog.scss';
import banca from '../../../asstes/img/sillas/silla-nueva.png';
import ProductItem from '../../../components/ProductItem/ProductItem';

const item = {name: "Banca Escolar", img: banca, className: "catalog"}

const DownloadCatalog = () => {
    return(
        <section className='download-catalog'>
            <ProductItem name={item.name} img={item.img} />
            <div className='data'>
                <h2 className='title'>Descarga el catálogo</h2>
                <button>PDF</button>
            </div>
            <ProductItem name={item.name} img={item.img} />
        </section>
    )
}

export default DownloadCatalog;