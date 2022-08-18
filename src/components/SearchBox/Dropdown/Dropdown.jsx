import React from 'react';

import './Dropdown.scss';

export const DropdownCategories = ({itemList, filterByCategory}) => {

    return(
        <select name="categories" className="dropdown categories" onChange={(e) => filterByCategory(e)}>
            {itemList.map(item => (
                <option key={item.cat_cve} value={item.cat_nombre}>
                    {item.cat_nombre}
                </option>
            ))}
        </select>
    )
}

export const DropdownTypes = ({itemList, filterByType}) => {
    
    return(
        <select name="types" className="dropdown types" onChange={(e) => filterByType(e)}>
            {itemList.map(item => (
                <option key={item.tip_cve} value={item.tip_nombre}>
                    {item.tip_nombre}
                </option>
            ))}
        </select>
    )
}
