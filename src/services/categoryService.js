import axios from "axios";

const  MOBILESCO_URL = 'https://mobilesco.mx/API/categorias';

export const getAllCategories = async() => {
    const response = await axios.get(MOBILESCO_URL);
    const data = response.data;

    return data;
}