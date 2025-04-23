import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const axiosApi = axios.create({
    baseURL: process.env.VITE_API_BASE_URL || 'http://localhost:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }

});

export default axiosApi;