package edu.infosys.inventoryApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.infosys.inventoryApplication.bean.ProductSales;
import edu.infosys.inventoryApplication.bean.StockTransactions;
import edu.infosys.inventoryApplication.dao.StockTransactionsDaoImpl;
import edu.infosys.inventoryApplication.service.StockTransactionsService;


@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "http://localhost:3838")
public class StockTransactionsController {
    
    @Autowired
    private StockTransactionsService stockTransactionsService;

    @Autowired
    private StockTransactionsDaoImpl stockTransactionsDaoImpl;

    @PostMapping("/generateStockTransactionId")
    public Long generateStockTransactionId() {
        return stockTransactionsService.generateTransactionId();
    }

    @PostMapping("/addStockTransaction/{transactionId}/{productId}/{quantity}/{flag}")
    public void addTransaction(@PathVariable Long transactionId, @PathVariable String productId, @PathVariable Double quantity, @PathVariable int flag) {
        stockTransactionsService.processTransaction(transactionId, productId, flag, quantity);
    }

    @GetMapping("/getAllStockTransactions")
    public List<StockTransactions> getAllTransactions() {
        return stockTransactionsDaoImpl.showAllStockTransactions();
    }

    @GetMapping("/getStockTransactions/{flag}")
    public List<StockTransactions> getStockTransactions(@PathVariable int flag) {
        if(flag == 1)   return stockTransactionsDaoImpl.findByTransactionType("IN");
        if(flag == 2)   return stockTransactionsDaoImpl.findByTransactionType("OUT");
        return null;
    }

    @GetMapping("/analysis")
    public List<ProductSales> getProductWiseTotalSales(){
        return stockTransactionsDaoImpl.getProductWiseTotalSale();
    }

    @GetMapping("/analysis/{productId}")
    public List<Double> getDemandByProduct(@PathVariable String productId){
        return stockTransactionsDaoImpl.getDemandByProduct(productId);
    }
}
