import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import './Catalog.scss';
import CategoriesPopular from './CategoriesPopular/CategoriesPopular';
import TopProducts from './TopProducts/TopProducts';
import DownloadCatalog from './DownloadCatalog/DownloadCatalog';
import ProductsList from './ProductsList/ProductList';
import SearchBar from './SearchBar/SearchBar';
import TypesPopular from './TypesPopular/TypesPupular';
import NotFoundView from '../../components/NotFoundView/NotFoundView';
import { getAllProducts } from '../../services/productSercive';

const scrollTop = () => {
    const scrolledElement = document.getElementById('catalog');

    scrolledElement.scrollIntoView();
}

const Catalog = () => {
    
    const { t } = useTranslation();
    const filteredProducts = useSelector(state => state.filter.data.filteredList);
    const inputProduct = useSelector(state => state.filter.data.input);
    
    const [input, setInput] = useState('');
    const [productList, setProductList] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [isSearched, setIsSearched] = useState(true);

    useEffect(() => {
        const getProducts = async() => {
            const products = await getAllProducts();

            setProductList(products);
        }

        if(filteredProducts.length > 0){
            setProductsFiltered(filteredProducts);
            setInput(inputProduct);
        }
        getProducts();
        scrollTop();

    }, [filteredProducts, inputProduct])

    const onChange = async(event) => {
        const productInput = event.target.value;
        setInput(productInput);

        if(productInput.length > 2) {
            const filtered = productList.filter(item => {
                const fullName = item.data.NOMBRE.toLowerCase();

                return fullName.indexOf(input) >= 0;
            })
            setIsSearched(!isSearched);
            setProductsFiltered(filtered);
            // console.log(filtered)
        }

        if(productInput.trim() === ''){
            setProductsFiltered(null);
        }
    }

    return (
        <section className="catalog" id='catalog'>
            <div className="header">
                <h1 className="title">{t('catalog.title')}</h1>
                <p className='description'>{t('catalog.description')}</p>
                
                <SearchBar productsFiltered={productsFiltered} input={input} onChange={onChange} />
                <TypesPopular setProductsFiltered={setProductsFiltered} setIsSearched={setIsSearched} isSearched={isSearched}/>
            </div>

            {productsFiltered && productsFiltered.length > 0 ? <ProductsList products={productsFiltered}/> : <NotFoundView input={input} />}

            {productList && <CategoriesPopular 
                productList={productList}
                setProductList={setProductList} 
                setIsSearched={setIsSearched} 
                isSearched={isSearched} 
            />}
            <TopProducts productList={productList}/>
            <DownloadCatalog />

        </section>
    )
}

export default Catalog;