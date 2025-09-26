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

import edu.infosys.inventoryApplication.bean.SKU;
import edu.infosys.inventoryApplication.dao.SKUDao;


@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "http://localhost:3838")
public class SKUController {
    @Autowired
    private SKUDao skuDao;
    
    @PostMapping("/sku")
    public void save(@RequestBody SKU sku){
        skuDao.save(sku);
    }

    @PostMapping("/sku/{id}")
    public SKU findSKUById(@PathVariable String id){
        return skuDao.findSKUById(id);
    }

    @DeleteMapping("/sku/{id}")
    public void removeSKU(@PathVariable String id){
        skuDao.removeSKU(id);
    }

    @GetMapping("/sku")
    public List<SKU> showAllSKUs(){
        return skuDao.showAllSKUs();
    }

    @PutMapping("/sku")
    public void updateSKU(@RequestBody SKU sku){
        skuDao.save(sku);
    }
}