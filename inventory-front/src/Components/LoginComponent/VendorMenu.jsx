
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../../AdminView.css';

const VendorMenu = () => {
     return (
        <div className="admin-container">
            <Navbar expand="lg" className="admin-navbar">
                <div className="d-flex w-100 justify-content-between align-items-center">
                    
                    {/* Left: Brand */}
                    <div className="navbar-brand mb-0 h1">SmartShelfX</div>

                    {/* Center: Navigation */}
                    <div className="d-flex justify-content-center flex-grow-1">
                        <Nav className="mx-auto gap-4"> 
                            <Nav.Link href="/ShowSingleUser"><b>Show User Details</b></Nav.Link>
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
                        <h1 className="admin-welcome">Welcome, Vendor!</h1>
                        <p className="admin-subtext">As a vendor, your access is limited to viewing user details within SmartShelfX Manager. This streamlined dashboard allows you to securely explore individual user profiles and their associated information. Product management, stock control, and SKU operations are restricted to administrative roles.</p>
                    </div>
                    <img src="Admin.png" alt="Admin" />
                </div>
            </div>
        </div>
    );
 
}

export default VendorMenu