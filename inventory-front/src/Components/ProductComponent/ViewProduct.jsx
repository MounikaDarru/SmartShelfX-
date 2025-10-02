import React, { useEffect } from "react";
import { getProductById } from "../../Services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import { getUserRole } from "../../Services/LoginService";
import { useState } from "react";

const ViewProduct = () => {
    const { id } = useParams();
    const [role, setRole] = React.useState("");
    let navigate = useNavigate();

    const [product, setProduct] = useState({
        productId: "",
        productName: "",
        sku: "",
        purchasePrice: 0.0,
        salesPrice: 0.0,
        reorderLevel: 0.0,
        stock: 0.0,
        vendorId: ""
    });

    const setProductData = () => {
        getProductById(id)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const setUserRole = () => {
        getUserRole().then((response) => {
            setRole(response.data);
        })
    }

    useEffect(() => {
        setProductData();
        setUserRole();
    }, [])

    const returnBack = () => {
        if(role === "Admin"){
            navigate('/AdminProductReport');
        }
        else if(role === "Manager"){
            navigate('/ManagerProductReport');
        }
    }

    return (
             <div>
               <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Product Id:  &nbsp;
                             {product.productId}</label>
                        </div>
                        <div className = "row">
                            <label> SKU:  &nbsp;
                            {product.sku} </label>
                        </div>
                        <div className = "row">
                            <label> Product Name:  &nbsp;
                            {product.productName} </label>
                        </div>
                        <div className = "row">
                            <label>Purchase Price:  &nbsp;
                            {product.purchasePrice} </label>
                        </div>
                        <div className = "row">
                            <label> Sales Price:  &nbsp;
                             {product.salesPrice} </label>
                        </div>
                        <div className = "row"> &nbsp;
                            <label> Re Order Level: &nbsp;
                             {product.reorderLevel} </label>
                        </div>
                        <div className = "row"> &nbsp;
                            <label> Stock: &nbsp;
                             {product.stock} </label>
                        </div>
                        <div className = "row"> &nbsp;
                            <label> Vendor: &nbsp;
                             {product.vendorId} </label>
                        </div>
                        <div>
                        <button className="btn btn-success" onClick={returnBack}>Return</button>                    
                        </div>
                  </div>  
                </div>
            </div>
        );

}

export default ViewProduct;