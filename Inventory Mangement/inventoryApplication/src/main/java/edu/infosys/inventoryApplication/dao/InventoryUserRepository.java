package edu.infosys.inventoryApplication.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.infosys.inventoryApplication.bean.InventoryUser;

public interface InventoryUserRepository extends JpaRepository<InventoryUser, String> {

    List<String> findByRole(String role);
    
}
