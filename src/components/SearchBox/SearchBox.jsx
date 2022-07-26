import React, {useState, useEffect} from 'react'

import './SearchBox.scss';
import { getAllCategories } from '../../services/categoryService';
import { getAllTypes } from '../../services/typeService';


const DropdownCategories = ({itemList}) => {
    return(
        <select name="categories" className="categories">
            {itemList.map(item => (
                <option key={item.cat_cve} value={item.cat_nombre}>
                    {item.cat_nombre}
                </option>
            ))}
        </select>
    )
}

const DropdownTypes = ({itemList}) => {
    return(
        <select name="types" className="types">
            {itemList.map(item => (
                <option key={item.tip_cve} value={item.tip_nombre}>
                    {item.tip_nombre}
                </option>
            ))}
        </select>
    )
}

const SearchBox = () => {

    const [types, setTypes] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const cat = await getAllCategories();
            const typ = await getAllTypes();

            setTypes(typ);
            setCategories(cat);
        }

        fetchData()
    }, [])

    return (
        <div className='search-box'>
            <p>Categoria</p>
            {categories && <DropdownCategories itemList={categories} />}
            <p>Tipo de Mueble</p>
            {types && <DropdownTypes itemList={types} />}
            <p>Mueble</p>
            <input type="text" placeholder='Nombre'/>
        </div>
    )
}


export default SearchBox;