import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const ManagerMenu = () => {
    <div className=".container">
        <br/>
        <div  align="center" style={{backgroundColor:'pink'}}>
          <h1 className = "text-center" style={{color:'magenta'}}><u><i>Inventory Manager Menu</i></u></h1>
        </div>
        <Navbar expand="lg" bg="warning">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="SKU" id="collasible-nav-dropdown"><b>SKU</b>
                        <NavDropdown.Item href="">SKU List</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Product" id="collasible-nav-dropdown"><b>Product</b>
                        <NavDropdown.Item href="">Product List</NavDropdown.Item>
                        <NavDropdown.Item href="">Product Analysis</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Stock" id="collasible-nav-dropdown"><b>Stock</b>
                        <NavDropdown.Item href="">Stock Issue</NavDropdown.Item>
                        <NavDropdown.Item href="">Stock Purchase</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/ShowSingleUser"><b>Show User Details</b></Nav.Link>
                    <Nav.Link href="/"><b>Logout</b></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
 
}

export default ManagerMenu;