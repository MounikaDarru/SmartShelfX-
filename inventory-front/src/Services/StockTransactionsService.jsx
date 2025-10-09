import axios from "axios";

const STOCK_URL = 'http://localhost:9898/inventory';

export const showAllStockTransactions = () => {
    return axios.get(STOCK_URL + '/getallStockTransactions');
};

export const addStockTransaction = (productId, flag, quantity) => {
    return axios.post(STOCK_URL + '/addStockTransaction/'+productId+'/'+quantity+'/'+flag);
};

export const getStockTransactions = (flag) => {
    return axios.get(STOCK_URL + '/getStockTransactions/'+flag);
};