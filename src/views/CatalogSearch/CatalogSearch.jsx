import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './CatalogSearch.scss';
import { products } from '../../variables/items';
import ProductsList from './ProductsList/ProductList';

const CatalogSearch = () => {

    const [productArray,  setProductArray] = useState();
    const [product, setProduct] = useState();
    const [productsFiltered, setProductsFiltered] = useState(null);    
    
    const getProducts = async(event) => {
       
        const response = await axios.get('https://mobilesco.mx/API/muebles');

        const data = response.data;

        // console.log("DATA", data);
        return data;
    }

    const onChange = async(event) => {
        const value = event.target.value;
        const productsAPI = await getProducts();
        
        console.log(productsAPI);

        if(value.length > 2) {
             const filtered = productsAPI.filter(item => {
                return item.NOMBRE.toLowerCase().indexOf(value.toLowerCase()) >= 0;
            })
            setProductsFiltered(filtered)
        }

        if(value.trim() === ''){
            setProductsFiltered(null);
        }
    }

    const onSearch = (event, searchTerm) => {
        event.preventDefault();
        setProduct(searchTerm);
        console.log("Search", searchTerm);
    }
    
    return(
        <section className='catalog-search'>


            <form className='search-bar'>
                <div className='input-box'>
                    <input type="text" value={product} placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                    <button className='search-button' onClick={getProducts}>Buscar</button>
                    <button className='categories'>Categorias</button>
                </div>

                {productsFiltered && <div className="dropdown">
                    {productsFiltered.map((item) => (
                        <div key={item.CLAVE} onClick={(e) => onSearch(e, item.name)} className="dropdown-row">
                            <p className='item-name'>{item.NOMBRE}</p>
                        </div>
                    ))}
                </div>}

            </form>

            {/* <button onClick={getProducts}>Buscar Prueba</button> */}

           {productsFiltered && <ProductsList products={productsFiltered}/> }

        </section>
    )
}

export default CatalogSearch;
