import React from 'react';

import './SearchBar.scss';

const SearchBar = ({productsFiltered, onChange}) => {
    return (
        <div className="search-bar">
            <div className="buttons">
                <div className='input-box'>
                    <input type="text" placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                
                    {/* <Link to={`/catalog-search/${input}`}> */}
                        <button className='search-button'>Buscar</button>
                    {/* </Link> */}
                </div>
                <button className='categories'>Categorias</button>
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