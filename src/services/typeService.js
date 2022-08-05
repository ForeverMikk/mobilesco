import axios from "axios";

const  MOBILESCO_URL = 'https://mobilesco.mx/API/tipos';
const HEADERS = {
    'api-key': 'cc0763ce', 
    'Accept': 'application/json',
    'Content-Type': 'text/plain'
};

export const getAllTypes = async() => {
    const response = await axios.get(MOBILESCO_URL, { headers: HEADERS });
    const data = response.data;

    return data;
}