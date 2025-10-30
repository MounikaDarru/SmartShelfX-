import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../../AdminView.css';
import { FaAngleRight } from "react-icons/fa";


const AdminMenu = () => {
    return (
        <div className="admin-container">
            <Navbar expand="lg" className="admin-navbar">
                <div className="d-flex w-100 justify-content-between align-items-center">
                    
                    {/* Left: Brand */}
                    <div className="navbar-brand mb-0 h1">SmartShelfX</div>

                    {/* Center: Navigation */}
                    <div className="d-flex justify-content-center flex-grow-1">
                        <Nav className="mx-auto gap-4">
                            <NavDropdown title="SKU" id="sku-dropdown">
                                <NavDropdown.Item href="/SkuReport">SKU List</NavDropdown.Item>
                                <NavDropdown.Item href="/SkuAdd">SKU Addition</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Product" id="product-dropdown" className="position-relative">
                                <NavDropdown.Item href="/addProduct">Product Addition</NavDropdown.Item>
                                <NavDropdown.Item href="/AdminProductReport">Product List</NavDropdown.Item>
                                <div className="dropdown-submenu">
                                    <NavDropdown.Item className="submenu-toggle">Product Analysis<FaAngleRight className="submenu-icon"/></NavDropdown.Item>
                                    <div className="submenu">
                                        <NavDropdown.Item href="/productAnalysis">Products Sales</NavDropdown.Item>
                                        <NavDropdown.Item href="/productDemand">Product Demand</NavDropdown.Item>
                                    </div>
                                </div>
                            </NavDropdown>
                            <NavDropdown title="Stock" id="stock-dropdown">
                                <NavDropdown.Item href="/Stock/2">Stock Issue</NavDropdown.Item>
                                <NavDropdown.Item href="/Stock/1">Stock Purchase</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>

                    {/* Right: Logout */}
                    <div>
                    <Nav.Link href="/" className="logout-link">Logout</Nav.Link>
                    </div>
                    
                </div>
            </Navbar>

            <div className="admin-content">
                <div className="admin-hero">
                    <div>
                        <h1 className="admin-welcome">Welcome, Admin!</h1>
                        <p className="admin-subtext">You're now in control of SmartShelfX — your centralized hub for managing SKUs, products, and stock with precision. Navigate through the menu to track inventory, analyze trends, and optimize operations.</p>
                    </div>
                    <img src="Admin.png" alt="Admin" />
                </div>
            </div>
        </div>
    )
}

export default AdminMenu;