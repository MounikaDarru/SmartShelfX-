package edu.infosys.inventoryApplication.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.infosys.inventoryApplication.bean.ProductSales;
import edu.infosys.inventoryApplication.bean.StockTransactions;

public interface StockTransactionsRepository extends JpaRepository<StockTransactions, Long> {
    @Query("SELECT MAX(transactionId) FROM StockTransactions")
    public Long findMaxTransactionId();

    @Query("SELECT s FROM StockTransactions s WHERE s.transactionType = :transactionType")
    public List<StockTransactions> findByTransactionType(String transactionType);

    @Query("SELECT NEW edu.infosys.inventoryApplication.bean.ProductSales(p.productName, SUM(s.transactionValue))"
            + "FROM Product p JOIN StockTransactions s ON p.productId = s.productId "
            + "WHERE s.transactionType='OUT' GROUP BY p.productId")
    public List<ProductSales> getProductWiseTotalSale();

    @Query("SELECT s.transactionValue from StockTransactions s WHERE s.transactionType='OUT' and productId=?1")
    public List<Double> getDemandByProduct(String productId);

}
