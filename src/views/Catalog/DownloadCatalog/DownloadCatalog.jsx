import React, { useState, useEffect } from 'react';

import './DownloadCatalog.scss';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { getProductById, getProductImages } from '../../../services/productSercive';

const DownloadCatalog = () => {

    const [product, setProduct] = useState();
    const [productImages, setProductImages] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getProductById(1);
            const images = await getProductImages(1);
            
            setProductImages(images[2]);
            setProduct(data)
        }
        fetchData()
    }, [])

    return(
        <section className='download-catalog'>
            {product && <ProductItem 
                        name={product.NOMBRE} 
                        description={product.DESCRIPCION}
                        img={`https://mobilesco.mx/API/images/uploads/${product.CLAVE}/${productImages.NOMBRE}`} 
                        id={product.CLAVE}
                        price={parseInt(product.COSTO)}
                        category={product.CATEGORIA}
                        color={product.COLOR}
                        material={product.MATERIAL}
                    />}
            <div className='data'>
                <h2 className='title'>Descarga el catálogo</h2>
                <button>PDF</button>
            </div>
            {product && <ProductItem 
                        name={product.NOMBRE} 
                        description={product.DESCRIPCION}
                        img={`https://mobilesco.mx/API/images/uploads/${product.CLAVE}/${productImages.NOMBRE}`} 
                        id={product.CLAVE}
                        price={parseInt(product.COSTO)}
                        category={product.CATEGORIA}
                        color={product.COLOR}
                        material={product.MATERIAL}
                    />}
        </section>
    )
}

export default DownloadCatalog;