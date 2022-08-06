import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFiltered } from '../../services/productSercive';

import './SearchBar.scss';

const SearchBar = ({ productsFiltered, onChange }) => {

    const [input, setInput] = useState();
    // const [itemsFiltered, setItemsFiltered] = useState(productsFiltered); 

    // const onChange = async(event) => {
    //     event.preventDefault();
    //     setInput(event.target.value.toLowerCase());

    //     if(input){
    //         if(input.length > 1) {
    //             const filtered = await getProductsFiltered(input);
    //             console.log('filtrados', filtered);
    //             setProductsFiltered(filtered);
    //             console.log(productsFiltered);
    //         }
    
    //         if(input.trim() === ''){
    //             setProductsFiltered(null);
    //         }
    //     }
    //     // console.log('items', itemsFiltered);
    //     console.log('products', productsFiltered);
    // }

    return (
        <div className='search-bar'>
            <div className='input-box'>
                <input type="text" placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                <div className="buttons">
                    <Link to={`/catalog-search?name=${input}`}>
                        <button className='search-button'>Buscar</button>
                    </Link>
                    <button className='categories'>Categorias</button>
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