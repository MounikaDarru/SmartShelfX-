package edu.infosys.inventoryApplication.service;

import org.springframework.stereotype.Service;

import edu.infosys.inventoryApplication.bean.Product;

@Service
public class ProductService {
    public Product stockEdit(Product product, Double quantity, int flag) {
        Double currentStock = product.getStock();
        if (flag == 2) {
            currentStock -= quantity;
        } else if (flag == 1) {
            currentStock += quantity;
        }
        product.setStock(currentStock);
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
