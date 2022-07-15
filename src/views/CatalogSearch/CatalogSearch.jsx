import React, { useState } from 'react';
import axios from 'axios';

import './CatalogSearch.scss';
// import { products } from '../../variables/items';
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
        const productInput = event.target.value.toLowerCase();
        const productsAPI = await getProducts();
      

        if(productInput.length > 2) {
            const filtered = productsAPI.filter(item => {
                const fullName = item.NOMBRE.toLowerCase();

                // return fullName && fullName.match(productInput) && fullName !== productInput
                return fullName.indexOf(productInput) >= 0;
            })
            setProduct(productInput);
            setProductsFiltered(filtered);
        }

        if(productInput.trim() === ''){
            setProductsFiltered(null);
        }
    }

    const onSearch = (event, searchTerm) => {
        event.preventDefault();

        setProduct(searchTerm);
        
        console.log(searchTerm);
    }
    
    return(
        <section className='catalog-search'>


            <form className='search-bar' onSubmit={(e) => onSearch(e,product)}>
                <div className='input-box'>
                    <input type="text" value={product} placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
                    <button className='search-button' onClick={(e) => onSearch(e,product)}>Buscar</button>
                    <button className='categories'>Categorias</button>
                </div>

                {productsFiltered && <div className="dropdown">
                    {productsFiltered.map((item) => (
                        <div key={item.CLAVE} onClick={(e) => onSearch(e, item.NOMBRE)} className="dropdown-row">
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
