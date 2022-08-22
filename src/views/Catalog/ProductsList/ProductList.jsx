import React from 'react';

import './ProductList.scss';
import ProductItem from '../../../components/ProductItem/ProductItem';
import silla from '../../../asstes/img/silla.jpg';

const ProductList = ({products}) => {
    return (

        <section className='grid'>
            {products && products.map(({data, images}, index) => 
                images && images.length > 0 ?
                <ProductItem 
                    key={index}
                    id={data.CLAVE}
                    name={data.NOMBRE}
                    img={`https://mobilesco.mx/API/images/uploads/${data.CLAVE}/${images[0].NOMBRE}`}
                    descripcion={data.DESCRIPCION}
                    price={data.COSTO}
                    category={data.CATEGORIA}
                    color={data.COLOR}
                    material={data.MATERIAL}
                    className="catalog"
                /> : <ProductItem 
                    key={index}
                    id={data.CLAVE}
                    name={data.NOMBRE}
                    img={silla}
                    descripcion={data.DESCRIPCION}
                    price={data.COSTO}
                    category={data.CATEGORIA}
                    color={data.COLOR}
                    material={data.MATERIAL}
                    className="catalog"
                />
            )}
        </section>
    )
}

export default ProductList