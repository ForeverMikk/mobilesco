import React from 'react';

import './SearchBar.scss';

const SearchBar = ({ onChange }) => {

    // const [input, setInput] = useState();
    // const [itemsFiltered, setItemsFiltered] = useState(productsFiltered); 

    // const onChange = async(event) => {
    //     event.preventDefault();
    //     setInput(event.target.value.toLowerCase());

    //     if(input){
    //         if(input.length > 1) {
    //             const filtered = await getProductsFiltered(input);
    //             console.log('filtrados', filtered);
    //             setProductsFiltered(filtered);
    //             console.log(productsFiltered);
    //         }
    
    //         if(input.trim() === ''){
    //             setProductsFiltered(null);
    //         }
    //     }
    //     // console.log('items', itemsFiltered);
    //     console.log('products', productsFiltered);
    // }

    return (
        <div className='input-box'>
            <input type="text" placeholder='Encuentra un mueble a tu medida' onChange={onChange}/>
            
            <button className='search-button'>Buscar</button>
        </div>
    )
}

export default SearchBar;