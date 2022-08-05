import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFiltered } from '../../services/productSercive';

import './SearchBar.scss';


const SearchBar = ({productsFiltered ,setProductsFiltered}) => {

    const [input, setInput] = useState()
    // const [productsFiltered, setProductsFiltered] = useState();

    const onChange = async(event) => {
        setInput(event.target.value.toLowerCase());
        if(input.length > 1) {
            const filtered = await getProductsFiltered(input);
            setProductsFiltered(filtered);
        }

        if(input.trim() === ''){
            setProductsFiltered(null);
        }
    }

    return (
        <div className='search-bar'>
            <div className='input-box'>
                <input type="text" placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                <div className="buttons">
                    <button className='search-button'>Buscar</button>
                    <Link to={`/catalog-search?name=${input}`}>
                        <button className='categories'>Categorias</button>
                    </Link>
                </div>
            </div>

            {productsFiltered && <div className="dropdown">
                {productsFiltered.map((item, index) => (
                    <div key={index} className="dropdown-row">
                        <p className='item-name'>{item.data.NOMBRE}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SearchBar;