import axios from "axios";

const STOCK_URL = 'http://localhost:9898/inventory';

export const generateStockTransactionId = () => {
    return axios.post(STOCK_URL + '/generateStockTransactionId');
}

export const showAllStockTransactions = () => {
    return axios.get(STOCK_URL + '/getallStockTransactions');
};

export const addStockTransaction = (transactionId, productId, flag, quantity) => {
    return axios.post(STOCK_URL + '/addStockTransaction/'+transactionId+'/'+productId+'/'+quantity+'/'+flag);
};

export const getStockTransactions = (flag) => {
    return axios.get(STOCK_URL + '/getStockTransactions/'+flag);
};