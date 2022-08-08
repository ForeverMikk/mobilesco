import React from 'react';

import './SearchBar.scss';

const SearchBar = ({ input, onChange }) => {


    return (
        <div className='input-box'>
            <input type="text" value={input} placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
            
            <button onClick={onChange} className='search-button'>Buscar</button>
        </div>
    )
}

export default SearchBar;