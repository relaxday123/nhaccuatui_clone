import axios from 'axios';

const httpInstance = axios.create({
    baseURL: `https://theaudiodb.p.rapidapi.com`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'bc9c950a49mshb7946e239311423p178408jsn57dbdd53e8f6',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
});

export default httpInstance;