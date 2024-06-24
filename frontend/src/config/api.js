import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getProducts = () => {
    return axios.get(`${API_URL}/products`);
};

export const getProductById = (id) => {
    return axios.get(`${API_URL}/products/${id}`);
};

export const getRelatedProducts = (id) => {
    return axios.get(`${API_URL}/products/category/${id}`);
};