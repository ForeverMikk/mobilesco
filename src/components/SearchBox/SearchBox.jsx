import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import './SearchBox.scss';
import { DropdownCategories, DropdownTypes } from './Dropdown/Dropdown';
import { getAllCategories } from '../../services/categoryService';
import { getAllTypes } from '../../services/typeService';
import { getAllProducts } from '../../services/productSercive';
import { filterActions } from '../../store/filter-slice';

const SearchBox = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const dataFiltered = useSelector(state => state.filter.filteredList);
    // const dataInput = useSelector(state => state.filter.inputValue);
    
    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);
    
    const [input, setInput] = useState('');
    const [productList, setProductList] = useState([]);
    const [filteredList, setFilteredList] = useState(productList);

    const filterByCategory = (e) => {
        const categoryValue = e.target.value;

        console.log("Select Category", categoryValue);
        const filtered = productList.filter(product => {
            const productCategory = product.data.CATEGORIA;

            return productCategory.indexOf(categoryValue) >= 0;
        });
        setFilteredList(filtered)
    }

    const filterByType = (e) => {
        const typeValue = e.target.value;

        console.log("Select Type", typeValue)
        const filtered = productList.filter(product => {
            const productType = product.data.CATEGORIA;

            return productType.indexOf(typeValue) >= 0;
        });
        setFilteredList(filtered)
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
        } 

        if(inputValue.trim() === ''){
            setFilteredList(null);
        }
    }

    const onSaveData = () => {

        dispatch(filterActions.saveFiltered(filteredList));
        dispatch(filterActions.saveInput(input));

        navigate("../catalog", { replace: true });
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
            <p>{t('search-box.category')}</p>
            {categories && <DropdownCategories itemList={categories} filterByCategory={filterByCategory} />}
            <p>{t('search-box.type')}</p>
            {types && <DropdownTypes itemList={types} filterByType={filterByType} />}
            <p>{t('search-box.name')}</p>
            <input type="text" placeholder={t('search-box.label')} onChange={filterByName}/>
            <button onClick={onSaveData}>
                {t('search-box.search')}
            </button>
        </div>
    )
}

export default SearchBox;