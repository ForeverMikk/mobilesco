import React from 'react';
import { Link } from 'react-router-dom';

import './SearchBar.scss';

// const useQuery = () => {
//     const search = useLocation();

//     return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const SearchBar = ({ onChange, productsFiltered, input }) => {

    // let query = useQuery();

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