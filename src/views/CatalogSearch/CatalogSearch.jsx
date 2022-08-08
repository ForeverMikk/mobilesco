import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './CatalogSearch.scss';
import SearchBar from './SearchBar/SearchBar';
import ProductsList from './ProductsList/ProductList';
import { getAllProducts } from '../../services/productSercive';

const CatalogSearch = () => {

    const { name } = useParams();
    const [input, setInput] = useState(name);
    const [productList, setProductList] = useState();
    const [productsFiltered, setProductsFiltered] = useState();

    useEffect(() => {
        const getProducts = async() => {
            setProductList(await getAllProducts());
        }
        getProducts();
        onChange();
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
    
    return(
        <section className='catalog-search'>
            <di className="search-bar">

                <div className="buttons">
                    <SearchBar input={input} onChange={onChange}/>
                    <button className='categories'>Categorias</button>
                </div>
                {productsFiltered && <div className="dropdown">
                            {productsFiltered.map((item, index) => (
                                <div key={index} className="dropdown-row">
                                    <p className='item-name'>{item.data.NOMBRE}</p>
                                </div>
                            ))}
                </div>}
            
            </di>
            {productsFiltered && <ProductsList products={productsFiltered}/> }
        </section>
    )
}

export default CatalogSearch;
