import React, { useState } from 'react';

import './CatalogSearch.scss';
import ProductsList from './ProductsList/ProductList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getAllProducts } from '../../services/produtcSercive';

const CatalogSearch = () => {

    const [productsFiltered, setProductsFiltered] = useState();

    const onChange = async(event) => {
        const productInput = event.target.value.toLowerCase();
        const productsList = await getAllProducts();

        if(productInput.length > 2) {
            const filtered = productsList.filter(item => {
                const fullName = item.NOMBRE.toLowerCase();

                return fullName.indexOf(productInput) >= 0;
            })
            console.log("filtrados",filtered)
            setProductsFiltered(filtered);
        } 

        if(productInput.trim() === ''){
            setProductsFiltered(null);
        }
    }
    
    return(
        <section className='catalog-search'>
            <SearchBar onChange={onChange} productsFiltered={productsFiltered}/>
            {productsFiltered && <ProductsList products={productsFiltered}/> }
        </section>
    )
}

export default CatalogSearch;
