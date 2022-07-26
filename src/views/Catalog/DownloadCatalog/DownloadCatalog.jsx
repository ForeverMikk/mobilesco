import React, { useState, useEffect } from 'react';

import './DownloadCatalog.scss';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { getProductById } from '../../../services/productSercive';

const DownloadCatalog = () => {

    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getProductById(11);
            // console.log('data', data[0])
            setProduct(data[0])
        }
        fetchData()
    }, [])

    return(
        <section className='download-catalog'>
            {product && <ProductItem name={product.NOMBRE} img={product.IMAGEN} />}
            <div className='data'>
                <h2 className='title'>Descarga el catálogo</h2>
                <button>PDF</button>
            </div>
            {product && <ProductItem name={product.NOMBRE} img={product.IMAGEN} />}
        </section>
    )
}

export default DownloadCatalog;