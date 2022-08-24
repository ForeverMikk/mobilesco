import React, { useState, useEffect } from 'react';

import './DownloadCatalog.scss';
import catalog from '../../../asstes/catalog/Catalogo_Mobilesco.pdf';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { getProductById, getProductImages } from '../../../services/productSercive';

const DownloadCatalog = () => {

    const [product, setProduct] = useState();
    const [productImages, setProductImages] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getProductById(79);
            const images = await getProductImages(79);
            
            setProductImages(images);
            setProduct(data)
        }
        fetchData()
    }, [])

    return(
        <section className='download-catalog'>
            {product && <ProductItem 
                        name={product.NOMBRE} 
                        description={product.DESCRIPCION}
                        img={`https://mobilesco.mx/API/images/uploads/${product.CLAVE}/${productImages[0].NOMBRE}`} 
                        id={product.CLAVE}
                        price={parseInt(product.COSTO)}
                        category={product.CATEGORIA}
                        images={productImages}
                        color={product.COLOR}
                        material={product.MATERIAL}
                        className='download'
                    />}
            <div className='data'>
                <h2 className='title'>Descarga el catálogo</h2>
                <a href={catalog} download='Catalogo_Mobilesco' className='download'>PDF</a>
            </div>
            {product && <ProductItem 
                        name={product.NOMBRE} 
                        description={product.DESCRIPCION}
                        img={`https://mobilesco.mx/API/images/uploads/${product.CLAVE}/${productImages[0].NOMBRE}`} 
                        id={product.CLAVE}
                        price={parseInt(product.COSTO)}
                        category={product.CATEGORIA}
                        color={product.COLOR}
                        images={productImages}
                        material={product.MATERIAL}
                        className='download'
                    />}
        </section>
    )
}

export default DownloadCatalog;