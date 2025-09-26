package edu.infosys.inventoryApplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import edu.infosys.inventoryApplication.bean.InventoryUser;

public interface InventoryUserRepository extends JpaRepository<InventoryUser, String> {
    
}
