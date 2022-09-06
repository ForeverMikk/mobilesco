import axios from 'axios';
// import toast from 'react-hot-toast';

const CLIENT_ID = 'mobilescopachucacontact@gmail.com';
const API_KEY = 'AIzaSyAVeoENX2xLHnfhCEW5lANzch444vgxKOs';
const GOOGLE_URL = `https://www.googleapis.com/calendar/v3/calendars/${CLIENT_ID}/events?sendNotifications=true&sendUpdates=all&supportsAttachments=true&key=${API_KEY}`;

const HEADERS = {
    'Accept': 'application/json',
    // 'Authorization': `Bearer 90u1fheg6cj9qdmkm6ncupuel8`,
    'Content-Type': 'application/json'
};


export const addEvent = async(event) => {
    await axios.post(GOOGLE_URL + 'mail', {event}, {headers: HEADERS})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
}