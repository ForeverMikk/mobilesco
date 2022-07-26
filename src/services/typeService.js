import axios from "axios";

const  MOBILESCO_URL = 'https://mobilesco.mx/API/tipos';

export const getAllTypes = async() => {
    const response = await axios.get(MOBILESCO_URL);
    const data = response.data;

    return data;
}