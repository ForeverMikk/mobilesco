import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './CatalogSearch.scss';
import ProductsList from './ProductsList/ProductList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getAllProducts } from '../../services/productSercive';

const CatalogSearch = () => {

    const [input, setInput] = useState();
    const [productsFiltered, setProductsFiltered] = useState();
    
    return(
        <section className='catalog-search'>
            <SearchBar setProductsFiltered={setProductsFiltered}/>
            {productsFiltered && <ProductsList products={productsFiltered}/> }
        </section>
    )
}

export default CatalogSearch;
