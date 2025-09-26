package edu.infosys.inventoryApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity<?> addProduct(@RequestBody Product product) {
        product.setProductId(dao.generateId());
        product = service.setSalesPrice(product);
        dao.save(product);
        return ResponseEntity.ok(product);
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
    public java.util.List<Product> showAllProducts() {
        return dao.showAllProducts();
    }

    @GetMapping("/reorderLevel/{id}")
    public Double findReorderLevelByProductId(@PathVariable String id) {
        return dao.findReorderLevelByProductId(id);
    }

    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product) {
        dao.update(product);
        return product;
    }

    @PutMapping("/editStock/{id}")
    public Product stockEdit(@PathVariable String id, @RequestParam Double quantity, @RequestParam int flag) {
        Product product = dao.findProductById(id);
        product = service.stockEdit(product, quantity, flag);
        dao.update(product);
        return product;
    }


    @GetMapping("/checkStock/{id}")
    public String stockChecking(@PathVariable String id) {
        Product product = dao.findProductById(id);
        return service.stockChecking(product);
    }

}
