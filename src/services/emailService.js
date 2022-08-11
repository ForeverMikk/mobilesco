import axios from 'axios';

const MOBILESCO_URL = 'https://mobilesco.mx/API/mailer/mail';
const HEADERS = {
    'api-key': 'e2325ad7', 
    'Accept': 'application/json',
    'Content-Type': 'text/plain'
};


export const sendEmailData = async(data) => {
    const newData = data;

    console.log(newData)
    await axios.post(MOBILESCO_URL, {newData}, {headers: HEADERS})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })
}