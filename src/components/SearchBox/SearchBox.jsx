import React, {useState, useEffect} from 'react'

import './SearchBox.scss';
import { DropdownCategories, DropdownTypes } from '../Dropdown/Dropdown';
import { getAllCategories } from '../../services/categoryService';
import { getAllTypes } from '../../services/typeService';

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
            <p>Categoría</p>
            {categories && <DropdownCategories itemList={categories} />}
            <p>Tipo de Mueble</p>
            {types && <DropdownTypes itemList={types} />}
            <p>Mueble</p>
            <input type="text" placeholder='Nombre'/>
            <button>Buscar</button>
        </div>
    )
}


export default SearchBox;