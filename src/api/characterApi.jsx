import axios from 'axios';
//import { getEnvVariables } from '../helpers';

//const { REACT_APP_API_URL } = getEnvVariables();

const characterApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
});

export default characterApi;