package edu.infosys.inventoryApplication.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.infosys.inventoryApplication.bean.ProductSales;
import edu.infosys.inventoryApplication.bean.StockTransactions;

@Repository
public class StockTransactionsDaoImpl implements StockTransactionsDao {
    @Autowired
    private StockTransactionsRepository repository;

    @Override
    public void save(StockTransactions stockTransactions) {
        repository.save(stockTransactions);
    }

    @Override
    public Long generateId() {
        Long id = repository.findMaxTransactionId();
        if (id == null) {
            return 10000L;
        } else {
            return id + 1L;
        }
    }

    @Override
    public List<StockTransactions> showAllStockTransactions() {
        return repository.findAll();
    }

    @Override
    public List<StockTransactions> findByTransactionType(String transactionType) {
        return repository.findByTransactionType(transactionType);
    }

    @Override
    public List<ProductSales> getProductWiseTotalSale() {
        return repository.getProductWiseTotalSale();
    }

    @Override
    public List<Double> getDemandByProduct(String productId) {
        return repository.getDemandByProduct(productId);
    }
}
