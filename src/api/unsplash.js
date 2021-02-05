import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY

// creates an instance of the axios client
// with customized info we'll use everytime preprogrammed in
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${API_KEY}}`
    }
})