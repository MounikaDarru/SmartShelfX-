package edu.infosys.inventoryApplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.infosys.inventoryApplication.bean.StockTransactions;

public interface StockTransactionsRepository extends JpaRepository<StockTransactions, Long> {
    @Query("SELECT MAX(transactionId) FROM StockTransactions")
    public Long findMaxTransactionId();
}
