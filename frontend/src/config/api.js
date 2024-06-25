/* eslint-disable no-unused-vars */
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

export const getSuggestedProducts = async () => {
    return axios.get(`${API_URL}/products/suggestions`);
}

export const getDiscountedProducts = async () => {
    return axios.get(`${API_URL}/products/discounts`);
}

export const getMenuProducts = async (menu) => {
    return axios.get(`${API_URL}/products/category/${menu}`);
}

export const getSearchProducts = async (key) => {
    return axios.get(`${API_URL}/products/search?q=${key}`);
}

export const listCartWithIdsProduct = (data) => {
    return axios.post(`${API_URL}/products/by-ids`, data);
};