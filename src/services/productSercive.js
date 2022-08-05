import axios from 'axios';

const MOBILESCO_URL = 'https://mobilesco.mx/API/muebles'

export const getProductById = async(id) => {
    const response = await axios.get(MOBILESCO_URL + `?idMueble=${id}`);
    const data = response.data;

    return data;
}

export const getAllProducts = async() => {
    const response = await axios.get(MOBILESCO_URL + '?opt=all');
    const data = response.data;

    return data;
}

export const getProductsFiltered = async(input) => {
    const productList = await getAllProducts();
    const productsFiltered = productList.filter(({data}) => {
        const productName = data.NOMBRE.toLowerCase();

        return productName.indexOf(input) >= 0;
    })
    
    return productsFiltered;
}


export const getProductsByCategory = async(category) => {
    const response = await axios.get(MOBILESCO_URL + `?idCategoria=${category}`);
    const data = response.data;

    return data;
}

export const getProductsByType = async(type) => {
    const response = await axios.get(MOBILESCO_URL + `?idTipo=${type}`);
    const data = response.data;

    return data;
}

export const getProductImages = async(id) => {
    const response = await axios.get(MOBILESCO_URL + `?idMuebleImagen=${id}`);
    const data = response.data;

    return data;
}

export const productClicked = async(id) => {
    await axios.post(`https://mobilesco.mx/API/busquedas`, { 
        "idMueble": id
     }).then(res => {
        console.log('response',res);
        console.log('data response',res.data);

    }).catch((err) => {
        console.log(err)
    })
}