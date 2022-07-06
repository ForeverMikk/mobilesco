import React, { useState } from 'react';

import './CatalogSearch.scss';
import { products } from '../../variables/items';


const CatalogSearch = () => {

    const [value, setvalue] = useState('');

    const onChange = (event) => {
        setvalue(event.target.value);
    }

    const onSearch = (event, searchTerm) => {
        event.preventDefault();
        setvalue(searchTerm)
        console.log("Search", searchTerm)
    }

    return(
        <section className='catalog-search'>

            <form onSubmit={(e) => onSearch(e, value)} className='search-bar'>
                <input type="text" value={value} placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                <button className='search-button'>Buscar</button>
                <button className='categories'>Categorias</button>
                <div className="dropdown">
                    {products.filter(item => {
                        const searchTerm = value.toLocaleLowerCase();
                        const fullName = item.name.toLocaleLowerCase();

                        return searchTerm && fullName.match(searchTerm) && fullName !== searchTerm;
                    })
                    .slice(0,5)
                    .map((item) => (
                        <div key={item.name} onClick={(e) => onSearch(e, item.name)} className="dropdown-row">
                            {item.name}
                        </div>
                    ))}
                </div>

            </form>


        </section>
    )
}

export default CatalogSearch;
