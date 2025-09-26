package edu.infosys.inventoryApplication.dao;

import java.util.List;

import edu.infosys.inventoryApplication.bean.Product;

public interface ProductDao {
    public void save(Product product);

    public Product findProductById(String productId);

    public String generateId();

    public void removeProduct(String productId);

    public List<Product> showAllProducts();

    public Double findReorderLevelByProductId(String productId);

    public void update(Product product);
}
