import axios from 'axios';
 
const PRODUCT_URL='http://localhost:9898/inventory'

export const addProduct = (product) => {
  return axios.post(PRODUCT_URL + '/addProduct', product);
};


export const getProductById = (id) => {
    return axios.get(PRODUCT_URL + '/product/' + id);
}

export const removeProduct = (id) => {
    return axios.delete(PRODUCT_URL + '/deleteProduct/' + id);
}

export const showAllProducts = () => {
    return axios.get(PRODUCT_URL + '/allProducts');
}

export const stockEdit = (product, quantity, flag) => {
    return axios.put(PRODUCT_URL + '/editStock/' + quantity + '/' + flag, product);
}

export const generateId = () => {
    return axios.get(PRODUCT_URL + '/generateId');
}

export const updateProductPrice = (product) => {
    return axios.put(PRODUCT_URL + '/updateProductPrice', product);
}