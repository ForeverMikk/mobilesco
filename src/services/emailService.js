import axios from 'axios';
import toast from 'react-hot-toast';

const MOBILESCO_URL = 'https://mobilesco.mx/API/mailer/';
const HEADERS = {
    'api-key': 'e2325ad7', 
    'Accept': 'application/json',
};


export const sendEmailData = async(data) => {
    // const newData = JSON.stringify(data);
    // console.log("Data",data);
    // console.log("JSON",JSON.parse(data));
    // console.log("String",JSON.parse(newData));
    await axios.post(MOBILESCO_URL + 'mail', {data}, {headers: HEADERS})
    .then((res) => {
        toast.success("La cotización se envió exitosamente");
        // console.log("Success",res);
    })
    .catch((err) => {
        toast.error("La cotización tuvo un problema, revisa los campos e intenta de nuevo");
        // console.log(err)
    })
}


export const sendSuscriptionData = async(data) => {
    await axios.post(MOBILESCO_URL + 'suscripcion', {data}, {headers: HEADERS})
    .then((res) => {
        toast.success(res.data.resultado);
    })
    .catch((err) => {
        toast.error("Hubo un error al registrarse, revisa los campos e intenta de nuevo");
        console.log(err)
    })
}