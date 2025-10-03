import React, {useState} from "react";
import { useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import '../ProductComponent/ProductList.css';
import { ChevronLeft, View, BadgeAlert, ShoppingCart } from "lucide-react";
import { showAllProducts, } from "../../Services/ProductService";


const ManagerProductReport = () => {

    let navigate = useNavigate();
    const [productlist, setProductList] = useState([]);

    const displayAllProducts=() =>{
        showAllProducts().then((response)=>{
            setProductList(response.data);
        });
    }

    useEffect(()=>{
        displayAllProducts();
    },[])

    const returnBack=()=>{
        navigate('/ManagerMenu');
    }

    return (
        <div className="text-center">
            <div>
            <div onClick={returnBack} style={{display: 'flex', justifyContent: 'flex-start', cursor: 'pointer', margin: '20px', marginLeft: '50px', fontWeight: 'bold'}}><ChevronLeft />Back</div>
            </div>
            <div className="container">
                <div className="product-header">
                    <span>Product Id</span>
                    <span>Vendor Id</span>
                    <span>Product Name</span>
                    <span>SKU</span>
                    <span>Purchase Price</span>
                    <span>Reorder Level</span>
                    <span>Stock</span>
                    <span>Actions</span>
                </div>
                {productlist.map((product) => (
                    <div className="product-item" key={product.productId}>
                        <span>{product.productId}</span>
                        <span>{product.vendorId}</span>
                        <span>{product.productName}</span>
                        <span>{product.sku}</span>
                        <span>{product.purchasePrice}</span>
                        <span>{product.reorderLevel}</span>
                        <span>{product.stock}</span>
                        <span>
                            <div style={{ width: '10%' }}>
                                <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start' }}>
                                    <button className="text-black p-2 rounded-full" style={{ border: 'none', backgroundColor: 'transparent' }}>
                                        <Link to={`/viewProduct/${product.productId}`} style={{ textDecoration: 'none', color: 'black' }}><View size={18} /></Link>
                                    </button>
                                    <button className="text-black p-2 rounded-full" style={{ border: 'none', backgroundColor: 'transparent' }}>
                                        <Link to={`/IssueProduct/${product.productId}`} style={{ textDecoration: 'none', color: 'black' }}><BadgeAlert size={18} /></Link>
                                    </button>
                                    <button className="text-black p-2 rounded-full" style={{ border: 'none', backgroundColor: 'transparent' }}>
                                        <Link to={`/PurchaseProduct/${product.productId}`} style={{ textDecoration: 'none', color: 'black' }}><ShoppingCart size={18} /></Link>
                                    </button>
                                </div>
                            </div>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManagerProductReport;