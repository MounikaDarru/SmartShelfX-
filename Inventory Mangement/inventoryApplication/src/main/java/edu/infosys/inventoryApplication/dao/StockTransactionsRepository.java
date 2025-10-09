package edu.infosys.inventoryApplication.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.infosys.inventoryApplication.bean.StockTransactions;

public interface StockTransactionsRepository extends JpaRepository<StockTransactions, Long> {
    @Query("SELECT MAX(transactionId) FROM StockTransactions")
    public Long findMaxTransactionId();

    @Query("SELECT s FROM StockTransactions s WHERE s.transactionType = :transactionType")
    public List<StockTransactions> findByTransactionType(String transactionType);
}
