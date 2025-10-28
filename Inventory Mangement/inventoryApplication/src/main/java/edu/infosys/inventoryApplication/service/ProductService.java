package edu.infosys.inventoryApplication.service;

import org.springframework.stereotype.Service;

import edu.infosys.inventoryApplication.bean.Product;

@Service
public class ProductService {
    public Product stockEdit(Product product, Double quantity, int flag) {
        Double currentStock = product.getStock();
        Boolean status = product.getStatus();
        Double reorderLevel = product.getReorderLevel();
        if (flag == 2) {
            currentStock -= quantity;
            if(currentStock <= reorderLevel)   status = false;
        } else if (flag == 1) {
            currentStock += quantity;
            if(currentStock > reorderLevel)    status = true;
        }
        product.setStock(currentStock);
        product.setStatus(status);
        return product;
    }

    public Product setSalesPrice (Product product){
        double purchasePrice = product.getPurchasePrice();
        double salesPrice = purchasePrice + (0.25 * purchasePrice);
        product.setSalesPrice(salesPrice);
        return product;
    }

    public String stockChecking(Product product){
        double stock = product.getStock();
        double rol = product.getReorderLevel();
        Boolean answer;
        if (stock <= rol){
            answer = true;
        }
        else{
            answer = false;
        }
        return answer.toString();
    }
}
