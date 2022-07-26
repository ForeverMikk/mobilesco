import axios from 'axios';

const MOBILESCO_URL = 'https://mobilesco.mx/API/muebles'

export const getAllProducts = async() => {
    const response = await axios.get(MOBILESCO_URL);
    const data = response.data;

    return data;
}

export const getProductById = async(id) => {
    const response = await axios.get(MOBILESCO_URL + `?idMueble=${id}`);
    const data = response.data;

    return data;
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
