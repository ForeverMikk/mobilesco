import React, { useEffect, useState } from 'react';

import './TypesPopular.scss';
import sillas from '../../../asstes/img/sillas.png';
import mesas from '../../../asstes/img/mesas.png';
import escritorios from '../../../asstes/img/escritorios.png';
import libreros from '../../../asstes/img/libreros.png';
import { getAllProducts } from '../../../services/productSercive';


const TypeCircle = ({img, name, onSearch}) => {
    return (
        <button className='type-circle' onClick={onSearch}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </button>
    )
}

const TypesPopular = ({setProductsFiltered, setIsSearched, isSearched}) => {
    
    // const [isSearched, setIsSearched] = useState(true);
    const [productList, setProductList] = useState([]);

    const onSearch = async(type) => {
        const filtered = productList.filter(item => {
            const fullName = item.data.TIPO.toLowerCase();

            return fullName.indexOf(type) >= 0;
        })

        setProductsFiltered(filtered);
        setIsSearched(!isSearched);
    }

    useEffect(() => {      
        const getProducts = async() => {
            const products = await getAllProducts();

            setProductList(products)
        }

        
        getProducts();
    }, [])
    
    

    return (
        <div className={isSearched ? 'types' : 'types hide' }>
            <TypeCircle img={sillas} name="Sillas" onSearch={() => onSearch('sillas')}/>
            <TypeCircle img={mesas} name="Mesas" onSearch={() => onSearch('mesas')}/>
            <TypeCircle img={escritorios} name="Escritorios" onSearch={() => onSearch('escritorios')}/>
            <TypeCircle img={libreros} name="Libreros" onSearch={() => onSearch('libreros')}/>
        </div>
    )
}


export default TypesPopular;