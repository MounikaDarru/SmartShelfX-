import axios from 'axios';
 
const SKU_URL='http://localhost:9898/inventory/sku'

export const save = (sku) => {
    return axios.post(SKU_URL, sku);
}

export const findSKUById = (id) => {
    return axios.get(SKU_URL+"/"+id);
}

export const removeSKU = (id) => {
    return axios.delete(SKU_URL+"/"+id);
}

export const showAllSKUs = () => {
    return axios.get(SKU_URL);
}

export const update = (sku) => {
    return axios.put(SKU_URL, sku);
}

