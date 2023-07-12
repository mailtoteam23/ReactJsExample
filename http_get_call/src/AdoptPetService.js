import axios from 'axios';


export function GetPets() {
    const API_URL = "https://api.publicapis.org/entries";
    const fetchData = axios.get(API_URL);
    return fetchData;
}

