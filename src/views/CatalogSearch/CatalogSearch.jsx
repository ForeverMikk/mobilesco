import React, { useState } from 'react';

import './CatalogSearch.scss';
import { products } from '../../variables/items';
import ProductsList from './ProductsList/ProductList';

const CatalogSearch = () => {

    const [product, setProduct] = useState();
    const [productsFiltered, setProductsFiltered] = useState(null);    
    
    const onChange = (event) => {
        const value = event.target.value;
        if(value.length > 2) {
             const filtered = products.filter(item => {
                return item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
            })
            setProductsFiltered(filtered)
        }

        if(value.trim() === ''){
            setProductsFiltered(null);
        }
    }

    const onSearch = (event, searchTerm) => {
        event.preventDefault();
        setProduct(searchTerm);
        console.log("Search", searchTerm);
    }

    return(
        <section className='catalog-search'>

            <form onSubmit={(e) => onSearch(e, product)} className='search-bar'>
                <div>
                    <input type="text" value={product} placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                    <button className='search-button'>Buscar</button>
                    <button className='categories'>Categorias</button>
                </div>

                {productsFiltered && <div className="dropdown">
                    {productsFiltered.map((item) => (
                        <div key={item.name} onClick={(e) => onSearch(e, item.name)} className="dropdown-row">
                            <p className='item-name'>{item.name}</p>
                        </div>
                    ))}
                </div>}

            </form>

           {productsFiltered && <ProductsList products={productsFiltered}/> }

        </section>
    )
}

export default CatalogSearch;
