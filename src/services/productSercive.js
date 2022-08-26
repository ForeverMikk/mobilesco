import axios from 'axios';

const MOBILESCO_URL = 'https://mobilesco.mx/API/muebles';
const HEADERS = {
    'api-key': 'cc0763ce', 
    'Accept': 'application/json',
};


export const getProductById = async(id) => {
    try {
        const response = await axios.get(MOBILESCO_URL + `?idMueble=${id}`, {headers: HEADERS});
        const data = response.data;
        
        return data;
        
    } catch (err) {
        console.log(err)
    }
}

export const getAllProducts = async() => {
    try {
        const response = await axios.get(MOBILESCO_URL + '?opt=all', {headers: HEADERS});
        const data = response.data;
    
        return data;
    } catch(err) {
        console.log(err)
    }
    
}

export const getProductsFiltered = async(input) => {
    try {
        const productList = await getAllProducts();
        const productsFiltered = productList.filter(({data}) => {
            const productName = data.NOMBRE.toLowerCase();

            return productName.indexOf(input) >= 0;
        })
    
        return productsFiltered;
    } catch(err) {
        console.log(err)
    }
}

export const getProductsByCategory = async(category) => {
    try {
        const response = await axios.get(MOBILESCO_URL + `?idCategoria=${category}`, {headers: HEADERS});
        const data = response.data;
    
        return data;
    }
    catch(err) {
        console.log(err)
    }
}

export const getProductsByType = async(type) => {
    try {
        const response = await axios.get(MOBILESCO_URL + `?idTipo=${type}`, {headers: HEADERS});
        const data = response.data;
    
        return data;
    } catch(err) {
        console.log(err)
    }
}

export const getProductImages = async(id) => {
    try {
        const response = await axios.get(MOBILESCO_URL + `?idMuebleImagen=${id}`, {headers: HEADERS});
        const data = response.data;
    
        return data;
    } catch(err) {
        console.log(err)
    }
}

export const productClicked = async(id) => {
    await axios.post(`https://mobilesco.mx/API/busquedas`, {"idMueble": id, "idIndicador": 1}, {headers: HEADERS})
    .then(res => {
        // console.log('click',res.data);
    }).catch((err) => {
        console.log(err)
    })
}

export const productFavorite = async(id) => {
    await axios.post(`https://mobilesco.mx/API/busquedas`, {"idMueble": id, "idIndicador": 2}, {headers: HEADERS})
    .then(res => {
        // console.log('favorite',res.data);
    }).catch((err) => {
        console.log(err)
    })
}