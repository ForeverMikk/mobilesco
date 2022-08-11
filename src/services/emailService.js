import axios from 'axios';

const MOBILESCO_URL = 'https://mobilesco.mx/API/mailer/mail';
const HEADERS = {
    'api-key': 'e2325ad7', 
    'Accept': 'application/json',
    // 'Content-Type': 'text/plain'
};


export const sendEmailData = async(data) => {
    // const newData = JSON.stringify(data);
    // console.log("Data",data);
    // console.log("JSON",JSON.parse(data));
    // console.log("String",JSON.parse(newData));
    await axios.post(MOBILESCO_URL, {data}, {headers: HEADERS})
    .then((res) => {
        console.log("Success",res);
    })
    .catch((err) => {
        console.log(err)
    })
}