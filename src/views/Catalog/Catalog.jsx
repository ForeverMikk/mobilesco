import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

import './Catalog.scss';
import CategoriesPopular from './CategoriesPopular/CategoriesPopular';
import TopProducts from './TopProducts/TopProducts';
import DownloadCatalog from './DownloadCatalog/DownloadCatalog';
import ProductsList from './ProductsList/ProductList';
import SearchBar from './SearchBar/SearchBar';
import { getAllProducts } from '../../services/productSercive';
import TypesPopular from './TypesPopular/TypesPupular';
import NotFoundView from '../../components/NotFoundView/NotFoundView';

const scrollTop = () => {
    const scrolledElement = document.getElementById('catalog');

    scrolledElement.scrollIntoView();
}

const Catalog = () => {

    const [input, setInput] = useState('');
    const [productList, setProductList] = useState();
    const [productsFiltered, setProductsFiltered] = useState();
    const [isSearched, setIsSearched] = useState(true);
    // const searcherFromHome = useSelector(state => state.filter);

    useEffect(() => {
        const getProducts = async() => {
            const products = await getAllProducts();

            setProductList(products);
        }
        getProducts();
        // console.log(productList);
        scrollTop();

        // console.log(searcherFromHome)

    }, [])
    
    const onSearch = () => {
        // console.log("Search")
        setIsSearched(!isSearched);
    }

    // const searchByCategory = async(category) => {
    //     const filtered = productsFiltered.filter(item => {
    //         const category = item.data.CATEGORIA.toLowerCase();

            
    //     })
    // }

    const onChange = async(event) => {
        const productInput = event.target.value;
        setInput(productInput);

        if(productInput.length > 2) {
            const filtered = productList.filter(item => {
                const fullName = item.data.NOMBRE.toLowerCase();

                return fullName.indexOf(input) >= 0;
            })
            onSearch();
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
                <h1 className="title">Catálogo</h1>
                <p className='description'>Hecha un vistazo a nuestros productos</p>
                
                <SearchBar productsFiltered={productsFiltered} onChange={onChange} />
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