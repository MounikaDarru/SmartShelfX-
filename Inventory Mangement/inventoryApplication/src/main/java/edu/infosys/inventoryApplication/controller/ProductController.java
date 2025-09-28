package edu.infosys.inventoryApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.infosys.inventoryApplication.bean.Product;
import edu.infosys.inventoryApplication.dao.ProductDaoImp;
import edu.infosys.inventoryApplication.service.ProductService;

@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "http://localhost:3838")
public class ProductController {
    @Autowired
    private ProductService service;

    @Autowired
    private ProductDaoImp dao;

    @PostMapping("/addProduct")
    public void addProduct(@RequestBody Product product) {
        product = service.setSalesPrice(product);
        dao.save(product);
    }

    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable String id) {
        return dao.findProductById(id);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public void removeProduct(@PathVariable String id) {
        dao.removeProduct(id);
    }

    @GetMapping("/allProducts")
    public List<Product> showAllProducts() {
        return dao.showAllProducts();
    }

    @PutMapping("/editStock/{quantity}/{flag}")
    public void stockEdit(@RequestBody Product product, @PathVariable Double quantity, @PathVariable int flag) {
        product = service.stockEdit(product, quantity, flag);
        dao.update(product);
    }

    @GetMapping("/generateId")
    public String generateId() {
        return dao.generateId();
    }

    @PutMapping("/updateProductPrice")
    public void updateProductPrice(@RequestBody Product product) {
        product = service.setSalesPrice(product);
        dao.update(product);
    }
}
