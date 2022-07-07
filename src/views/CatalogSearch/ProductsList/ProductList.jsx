import React from 'react';

import './ProductList.scss';
import ProductItem from '../../../components/ProductItem/ProductItem';

const ProductList = ({products}) => {
    return (

        <section className='grid'>
            {products && products.map((item, index) => (
                <ProductItem 
                    key={index}
                    name={item.name}
                    img={item.img}
                    description={item.description}
                />
            ))}
        </section>
    )
}

export default ProductList