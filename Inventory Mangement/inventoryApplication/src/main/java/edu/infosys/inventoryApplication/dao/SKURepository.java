package edu.infosys.inventoryApplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.infosys.inventoryApplication.bean.SKU;

public interface SKURepository extends JpaRepository<SKU, String> {
    
}
