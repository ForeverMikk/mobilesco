import React from 'react';
import { useTranslation } from 'react-i18next';

import './SearchBar.scss';

const SearchBar = ({productsFiltered, onChange}) => {
    const { t } = useTranslation();

    return (
        <div className="search-bar">
           
            <div className='input-box'>
                <input type="text" placeholder={t('catalog.search-bar.input')} onChange={onChange}/>
            
                <button className='search-button'>{t('catalog.search-bar.submit')}</button>
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