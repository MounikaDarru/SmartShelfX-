import axios from 'axios';
 
const PRODUCT_URL='http://localhost:9898/inventory'

export const addProduct = (product) => {
  return axios.post(PRODUCT_URL + '/addProduct', product);
};


export const getProductById = (id) => {
    return axios.get(PRODUCT_URL + '/' + id);
}

export const removeProduct = (id) => {
    return axios.delete(PRODUCT_URL + '/deleteProduct' + id);
}

export const showAllProducts = () => {
    return axios.get(PRODUCT_URL + '/allProducts');
}

export const findReorderLevelByProductId = (id) => {
    return axios.get(PRODUCT_URL + '/reorderLevel/' + id);
}

export const updateProduct = (product) => {
    return axios.put(PRODUCT_URL + '/updateProduct' + product);
}

export const stockEdit = (id, quantity, flag) => {
    return axios.put(PRODUCT_URL + '/editStock/' + id + '?quantity=' + quantity + '&flag=' + flag);
}

export const stockChecking = (id) => {
    return axios.get(PRODUCT_URL + '/checkStock/' + id);
}