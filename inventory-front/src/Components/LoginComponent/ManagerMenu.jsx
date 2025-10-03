import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../../AdminView.css';

const ManagerMenu = () => {
    
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
                            </NavDropdown>
                            <NavDropdown title="Product" id="product-dropdown">
                            <NavDropdown.Item href="/ManagerProductReport">Product List</NavDropdown.Item>
                            <NavDropdown.Item href="">Product Analysis</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Stock" id="stock-dropdown">
                            <NavDropdown.Item href="">Stock Issue</NavDropdown.Item>
                            <NavDropdown.Item href="">Stock Purchase</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/ShowSingleUser">Show User Details</Nav.Link>
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
                        <h1 className="admin-welcome">Welcome, Manager!</h1>
                        <p className="admin-subtext">You're now at the helm of SmartShelfX Manager — your all-in-one dashboard for overseeing SKUs, products, stock flow, and user insights. Effortlessly explore SKU listings, dive into product reports and analysis, resolve stock issues, manage purchases, and access user details — all from one streamlined control center. Navigate with confidence and drive smarter decisions across your inventory ecosystem.</p>
                    </div>
                    <img src="Admin.png" alt="Admin" />
                </div>
            </div>
        </div>
    )
 
}

export default ManagerMenu;
