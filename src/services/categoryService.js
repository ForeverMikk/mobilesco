import axios from "axios";

const  MOBILESCO_URL = 'https://mobilesco.mx/API/categorias';
const HEADERS = {
    'api-key': 'cc0763ce', 
    'Accept': 'application/json',
}

export const getAllCategories = async() => {
    const response = await axios.get(MOBILESCO_URL, {headers: HEADERS});
    const data = response.data;
    
    return data;
}