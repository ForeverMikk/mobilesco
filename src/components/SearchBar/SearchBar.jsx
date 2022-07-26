import React from 'react';

import './SearchBar.scss';

const SearchBar = ({onChange, productsFiltered}) => {

    return (
        <div className='search-bar'>
            <div className='input-box'>
                <input type="text" placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                <button className='search-button'>Buscar</button>
                <button className='categories'>Categorias</button>
            </div>

            {productsFiltered && <div className="dropdown">
                {productsFiltered.map((item, index) => (
                    <div key={index} className="dropdown-row">
                        <p className='item-name'>{item.NOMBRE}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SearchBar;