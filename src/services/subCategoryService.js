import axios from "axios";

const  MOBILESCO_URL = 'https://mobilesco.mx/API/subcategorias';

export const getAllCategories = async() => {
    const response = await axios.get(MOBILESCO_URL);
    const data = response.data;

    return data;
}