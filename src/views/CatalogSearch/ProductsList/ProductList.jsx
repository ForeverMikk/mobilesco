import React from 'react';

import './ProductList.scss';
import ProductItem from '../../../components/ProductItem/ProductItem';

const ProductList = ({products}) => {
    return (

        <section className='grid'>
            {products && products.map((item, index) => (
                <ProductItem 
                    key={index}
                    id={item.CLAVE}
                    name={item.NOMBRE}
                    img={item.IMAGEN}
                    description={item.DESCRIPCION}
                    price={item.COSTO}
                    category={item.CATEGORIA}
                    color={item.COLOR}
                    material={item.MATERIAL}
                    className="catalog"
                />
            ))}
        </section>
    )
}

export default ProductList