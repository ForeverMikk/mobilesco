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

const Catalog = () => {

    const [input, setInput] = useState();
    const [productList, setProductList] = useState();
    const [productsFiltered, setProductsFiltered] = useState();

    useEffect(() => {
        const getProducts = async() => {
            setProductList(await getAllProducts());
        }
        getProducts();

    }, [])
    

    const onChange = async(event) => {
        const productInput = event.target.value;
        setInput(productInput);

        if(productInput.length > 2) {
            const filtered = productList.filter(item => {
                const fullName = item.data.NOMBRE.toLowerCase();

                return fullName.indexOf(input) >= 0;
            })
            setProductsFiltered(filtered);
        } 

        if(productInput.trim() === ''){
            setProductsFiltered(null);
        }
    }

    return (
        <section className="catalog">
            <div className="header">

                <h1 className="title">Echa a un vistazo a<br />nuestro catálogo</h1>

                <p className='description'>Si estás en busca de mobiliario de calidad entonces eres bienvenido. Tenemos diferentes tipos de muebles esperando a ser repartidos.</p>

                <SearchBar productsFiltered={productsFiltered} onChange={onChange} />

                {/* <button onClick={onSearch}>Buscar</button> */}

                <div className='categories'>
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