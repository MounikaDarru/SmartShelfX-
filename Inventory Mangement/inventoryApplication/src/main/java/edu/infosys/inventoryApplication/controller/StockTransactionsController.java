package edu.infosys.inventoryApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.infosys.inventoryApplication.bean.StockTransactionRequest;
import edu.infosys.inventoryApplication.dao.StockTransactionsDao;
import edu.infosys.inventoryApplication.service.StockTransactionsService;


@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "http://localhost:3838")
public class StockTransactionsController {
    
    @Autowired
    private StockTransactionsService stockTransactionsService;

    @Autowired
    private StockTransactionsDao stockTransactionsDao;

    @PostMapping("/addStockTransaction")
    public void addTransaction(@RequestBody StockTransactionRequest request) {
        stockTransactionsService.processTransaction(request.getProductId(), request.getFlag(), request.getQuantity());
    }

    @GetMapping("/getAllStockTransactions")
    public void getAllTransactions() {
        stockTransactionsDao.showAllStockTransactions();
    }
}
