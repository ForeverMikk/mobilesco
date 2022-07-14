import React from 'react';

import './ProductList.scss';
import ProductItem from '../../../components/ProductItem/ProductItem';

const ProductList = ({products}) => {
    return (

        <section className='grid'>
            {products && products.map((item, index) => (
                <ProductItem 
                    key={index}
                    name={item.NOMBRE}
                    img={item.IMAGEN}
                    description={item.DESCRIPCION}
                />
            ))}
        </section>
    )
}

export default ProductList