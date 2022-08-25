import React, { useState, useEffect } from 'react';

import './Catalog.scss';
import CategoriesPopular from './CategoriesPopular/CategoriesPopular';
import TopProducts from './TopProducts/TopProducts';
import DownloadCatalog from './DownloadCatalog/DownloadCatalog';
import ProductsList from './ProductsList/ProductList';
import SearchBar from './SearchBar/SearchBar';
import { getAllProducts } from '../../services/productSercive';
import TypesPopular from './TypesPopular/TypesPupular';
import notFoundImg from '../../asstes/img/defaultImg.jpg';

const NotFoundView = ({ input }) => {
    if(input.length > 2) {
        return (
            <div className="not-found-img">
                <img src={notFoundImg} alt={`Not found ${input}`} />
                <p>No hemos encontrado ninguna coincidencia con {input}</p>
            </div>
        )
    } else {
        return <></>
    }
}

const scrollTop = () => {
    const scrolledElement = document.getElementById('catalog');

    scrolledElement.scrollIntoView();
}

const Catalog = () => {

    const [input, setInput] = useState('');
    const [productList, setProductList] = useState();
    const [productsFiltered, setProductsFiltered] = useState();
    const [isSearched, setIsSearched] = useState(true);

    useEffect(() => {
        const getProducts = async() => {
            setProductList(await getAllProducts());
        }
        getProducts();
        scrollTop();

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
                <p className='description'>"Hecha un vistazo a nuestros productos</p>
                
                <SearchBar productsFiltered={productsFiltered} onChange={onChange} />
                <TypesPopular setProductsFiltered={setProductsFiltered}/>
            </div>

            {productsFiltered && productsFiltered.length > 0 ? <ProductsList products={productsFiltered}/> : <NotFoundView input={input} />}

            <CategoriesPopular />
            <TopProducts />
            <DownloadCatalog />

        </section>
    )
}

export default Catalog;