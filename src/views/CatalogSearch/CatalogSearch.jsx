import React, { useState } from 'react';

import './CatalogSearch.scss';
import { products } from '../../variables/items';
import ProductList from './ProductsList/ProductList';




const CatalogSearch = () => {

    const [value, setValue] = useState('');
    const [productosArray, setProductosArray] = useState(products);
    const [categories, setCategories] = useState();

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (event, searchTerm) => {
        event.preventDefault();
        setValue(searchTerm)
        console.log("Search", searchTerm)
    }

    return(
        <section className='catalog-search'>

            <form onSubmit={(e) => onSearch(e, value)} className='search-bar'>
                <input type="text" value={value} placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                <div className="dropdown">
                    {products.filter(item => {
                        const searchTerm = value.toLocaleLowerCase();
                        const fullName = item.name.toLocaleLowerCase();

                        return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
                    })
                    .slice(0,5)
                    .map((item) => (
                        <div key={item.name} onClick={(e) => onSearch(e, item.name)} className="dropdown-row">
                            {item.name}
                        </div>
                    ))}
                </div>
                <button className='search-button'>Buscar</button>
                <button className='categories'>Categorias</button>

            </form>

            {/* <ProductList /> */}

        </section>
    )
}

export default CatalogSearch;
