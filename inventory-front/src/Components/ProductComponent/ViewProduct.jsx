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
             <div style={{display:'flex', justifyContent:'center', marginTop:'150px'}}>
               <br></br>
                <div style={{padding:'50px', backgroundColor:'white', borderRadius:'10px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width:'500px'}}>
                    <h3 style={{fontWeight:'bold', textAlign:'center', marginBottom:'30px'}}>Product Details</h3>
                     <table>
                        <tbody className="text-left">
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Product Id:</td>
                                <td style={{padding:'5px 30px'}}>{product.productId}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Product Name:</td>
                                <td style={{padding:'5px 30px'}}>{product.productName}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>SKU:</td>
                                <td style={{padding:'5px 30px'}}>{product.sku}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Purchase Price:</td>
                                <td style={{padding:'5px 30px'}}>{product.purchasePrice}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Sales Price:</td>
                                <td style={{padding:'5px 30px'}}>{product.salesPrice}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Reorder Level:</td>
                                <td style={{padding:'5px 30px'}}>{product.reorderLevel}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Stock:</td>
                                <td style={{padding:'5px 30px'}}>{product.stock}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Vendor Id:</td>
                                <td style={{padding:'5px 30px'}}>{product.vendorId}</td>
                            </tr>
                        </tbody>
                     </table>
                     <div style={{display:'flex', justifyContent:'center', fontWeight:'bold', marginTop:'30px'}}>
                        <button className="btn btn-primary" onClick={returnBack}>CLOSE</button>
                     </div>
                </div>
            </div>
        );

}

export default ViewProduct;