package edu.infosys.inventoryApplication.dao;

import java.util.List;

import edu.infosys.inventoryApplication.bean.StockTransactions;

public interface StockTransactionsDao {
    public void save(StockTransactions stockTransaction);
    public Long generateId();
    // public StockTransactions findByTransactionId(Long transactionId);
    public List<StockTransactions> showAllStockTransactions();

}
