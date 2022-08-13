import axios from 'axios';
import toast from 'react-hot-toast';

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
        toast.success("La cotización se envió exitosamente");
        console.log("Success",res);
    })
    .catch((err) => {
        toast.error("La cotización tuvo un problema, revisa los campos e intenta de nuevo");
        console.log(err)
    })
}