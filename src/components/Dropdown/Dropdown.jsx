import React from 'react';

import './Dropdown.scss';

export const DropdownCategories = ({itemList}) => {
    return(
        <select name="categories" className="dropdown categories">
            {itemList.map(item => (
                <option key={item.cat_cve} value={item.cat_nombre}>
                    <p>
                        {item.cat_nombre}
                    </p>
                </option>
            ))}
        </select>
    )
}

export const DropdownTypes = ({itemList}) => {
    return(
        <select name="types" className="dropdown types">
            {itemList.map(item => (
                <option key={item.tip_cve} value={item.tip_nombre}>
                    <p>
                        {item.tip_nombre}
                    </p>
                </option>
            ))}
        </select>
    )
}
