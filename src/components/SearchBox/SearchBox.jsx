import React from 'react'

import './SearchBox.scss';

const SearchBox = () => {
    return (
        <div className='search-box'>
            <p>Categoria</p>
            <input type="text" placeholder='De oficina'/>
            <p>Calidad</p>
            <input type="text" placeholder='Premium'/>
            <p>Mueble</p>
            <input type="text" placeholder='Nombre'/>
        </div>
    )
}


export default SearchBox;