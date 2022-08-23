import React, { useState, useEffect } from 'react';

import './Catalog.scss';
import sillas from '../../asstes/img/sillas.png';
import mesas from '../../asstes/img/mesas.png';
import escritorios from '../../asstes/img/escritorios.png';
import libreros from '../../asstes/img/libreros.png';
import CategoriesPopular from './CategoriesPopular/CategoriesPopular';
import TopProducts from './TopProducts/TopProducts';
import DownloadCatalog from './DownloadCatalog/DownloadCatalog';
import ProductsList from './ProductsList/ProductList';
import { getAllProducts } from '../../services/productSercive';
import SearchBar from './SearchBar/SearchBar';

const CaregorieCircle = ({img, name}) => {
    return (
        <button className='categorie-circle'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </button>
    )
}

const scrollTop = () => {
    const scrolledElement = document.getElementById('catalog');

    scrolledElement.scrollIntoView();
}

const Catalog = () => {

    const [input, setInput] = useState();
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
        console.log("Search")
        setIsSearched(!isSearched);
    }

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
        } 

        if(productInput.trim() === ''){
            setProductsFiltered(null);
        }
    }

    return (
        <section className="catalog" id='catalog'>
            <div className="header">

                <h1 className="title">Catálogo</h1>

                <p className='description'>Echa a un vistazo a nuestro catálogo</p>

                <SearchBar productsFiltered={productsFiltered} onChange={onChange} />

                {/* <button onClick={onSearch}>Buscar</button> */}

                <div className={isSearched ? 'categories' : 'categories hide' }>
                    <CaregorieCircle img={sillas} name="Sillas" />
                    <CaregorieCircle img={mesas} name="Mesas" />
                    <CaregorieCircle img={escritorios} name="Escritorios" />
                    <CaregorieCircle img={libreros} name="Libreros" />
                </div>
            </div>

            {productsFiltered && <ProductsList products={productsFiltered}/> }

            <CategoriesPopular />
            <TopProducts />
            <DownloadCatalog />

        </section>
    )
}

export default Catalog;