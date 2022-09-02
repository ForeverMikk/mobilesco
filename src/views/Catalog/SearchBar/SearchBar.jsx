import React from 'react';
import { useTranslation } from 'react-i18next';

import './SearchBar.scss';

const SearchBar = ({productsFiltered, onChange, input}) => {
    const { t } = useTranslation();

    return (
        <div className="search-bar">
           
            <div className='input-box'>
                {input 
                ? <input type="text" value={input} placeholder={t('catalog.search-bar.input')} onChange={onChange}/>
                : <input type="text" value='' placeholder={t('catalog.search-bar.input')} onChange={onChange}/>
            }
            
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