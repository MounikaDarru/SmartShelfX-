package edu.infosys.inventoryApplication.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class StockTransactions {
    @Id
    private Long transactionId;
    private String transactionType; // "IN" or "OUT"
    private String productId;
    private Double quantity;
    private Double transactionValue;
    private String userId;
    private String transactionDate;

    public StockTransactions() {}

    public StockTransactions(Long transactionId, String transactionType, String productId, Double quantity, Double transactionValue, String userId, String transactionDate) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.productId = productId;
        this.quantity = quantity;
        this.transactionValue = transactionValue;
        this.userId = userId;
        this.transactionDate = transactionDate;
    }

    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) throws IllegalArgumentException {
        if("IN".equals(transactionType) || "OUT".equals(transactionType))   this.transactionType = transactionType;
        else throw new IllegalArgumentException("Invalid transaction type. It should be 'IN' or 'OUT'");
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Double getTransactionValue() {
        return transactionValue;
    }

    public void setTransactionValue(Double transactionValue) {
        this.transactionValue = transactionValue;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }
}