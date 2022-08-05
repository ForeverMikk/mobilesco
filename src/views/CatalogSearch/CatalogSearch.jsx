import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

import './CatalogSearch.scss';
import ProductsList from './ProductsList/ProductList';
import SearchBar from '../../components/SearchBar/SearchBar';

const CatalogSearch = () => {

    const [productsFiltered, setProductsFiltered] = useState();
    
    return(
        <section className='catalog-search'>
            <SearchBar setProductsFiltered={setProductsFiltered} productsFiltered={productsFiltered}/>
            {productsFiltered && <ProductsList products={productsFiltered}/> }
        </section>
    )
}

export default CatalogSearch;
