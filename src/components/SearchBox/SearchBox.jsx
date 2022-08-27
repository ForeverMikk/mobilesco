import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

import './SearchBox.scss';
import { DropdownCategories, DropdownTypes } from './Dropdown/Dropdown';
import { getAllCategories } from '../../services/categoryService';
import { getAllTypes } from '../../services/typeService';
import { getAllProducts } from '../../services/productSercive';
import { filterActions } from '../../store/filter-slice';


const SearchBox = () => {


    const dispatch = useDispatch();
    const searcherFromHome = useSelector(state => state.filter);
    // const dataFiltered = useSelector(state => state.filter.filteredList);
    // const dataInput = useSelector(state => state.filter.inputValue);
    
    const [types, setTypes] = useState();
    const [categories, setCategories] = useState();
    
    const [input, setInput] = useState();
    const [productList, setProductList] = useState([]);
    const [filteredList, setFilteredList] = useState(productList);



    const filterByCategory = (e) => {
        const categoryValue = e.target.value;

        console.log("Select Category",categoryValue)
        const filtered = productList.filter(product => {
            const productCategory = product.data.CATEGORIA;

            return productCategory.indexOf(categoryValue) >= 0;
        });
        setFilteredList(filtered)
        // console.log('fil cat', filteredList);
        // console.log("-----------------------------------");
    }

    const filterByType = (e) => {
        const typeValue = e.target.value;

        console.log("Select Type", typeValue)
        const filtered = productList.filter(product => {
            const productType = product.data.CATEGORIA;

            return productType.indexOf(typeValue) >= 0;
        });
        setFilteredList(filtered)
        // console.log('fil cat', filteredList);
        // console.log("-----------------------------------");
    }

    const filterByName = (e) => {
        const inputValue = e.target.value;

        if(inputValue.length > 1) {
            const filtered = productList.filter(item => {
                const fullName = item.data.NOMBRE.toLowerCase();

                return fullName.indexOf(inputValue) >= 0;
            })
            setInput(inputValue);
            setFilteredList(filtered);
            console.log('fil name', filteredList);
            console.log("-----------------------------------");
        } 

        if(inputValue.trim() === ''){
            setFilteredList(null);
        }
    }

    const onSaveData = () => {
        dispatch(filterActions.saveInput(input, filteredList));
        // dispatch(filterActions.saveFiltered(filteredList));

        console.log('data save');
        console.log('date saved', searcherFromHome);

    }
 
    useEffect(() => {
        const fetchData = async() => {
            const cat = await getAllCategories();
            const typ = await getAllTypes();
            const list = await getAllProducts();

            setTypes(typ);
            setCategories(cat);
            setProductList(list);
        }
        
        fetchData()
        // console.log("Lista", productList);
    }, [])

    return (
        <div className='search-box'>
            <p>Categoría</p>
            {categories && <DropdownCategories itemList={categories} filterByCategory={filterByCategory} />}
            <p>Tipo de Mueble</p>
            {types && <DropdownTypes itemList={types} filterByType={filterByType} />}
            <p>Mueble</p>
            <input type="text" placeholder='Nombre' onChange={filterByName}/>
            <button onClick={onSaveData}>
                Buscar
            </button>
        </div>
    )
}


export default SearchBox;