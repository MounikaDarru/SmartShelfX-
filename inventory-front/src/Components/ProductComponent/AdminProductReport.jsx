import React, {useState} from "react";
import { useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import '../ProductComponent/ProductList.css';
import { ChevronLeft, Pencil, Trash, View, BadgeAlert, ShoppingCart, EllipsisVertical } from "lucide-react";
import { showAllProducts, removeProduct } from "../../Services/ProductService";


const AdminProductReport = () => {

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
        navigate('/AdminMenu');
    }

    const deleteProduct=(id)=>{
        removeProduct(id).then((response)=>{
            let remainingProducts = productlist.filter(product => product.productId !== id);
            setProductList(remainingProducts);
        });
        navigate('/AdminProductReport');
    }

    const [activeDropdownId, setActiveDropdownId] = useState(null);

    const toggleDropdown = (productId) => {
    setActiveDropdownId(prev => (prev === productId ? null : productId));
    };

    const closeDropdown = () => {
    setActiveDropdownId(null);
    };

    return (
        <div className="text-center">
            <div>
            <div onClick={returnBack} style={{display: 'flex', justifyContent: 'flex-start', cursor: 'pointer', margin: '20px', marginLeft: '50px', fontWeight: 'bold'}}><ChevronLeft />Back</div>
            </div>
            <div className="container">
                <div className="header">
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
                    <div className="item" key={product.productId}>
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
                                        <Link to={`/updateProductPrice/${product.productId}`} style={{ textDecoration: 'none', color: 'black' }}><Pencil size={18} /></Link>
                                    </button>
                                    <button onClick={() => deleteProduct(product.productId)} className="text-black p-2 rounded-full" style={{ border: 'none', backgroundColor: 'transparent' }}>
                                        <Trash size={18} />
                                    </button>
                                    <button onClick={() => toggleDropdown(product.productId)} className="text-black p-2 rounded-full" style={{ border: 'none', backgroundColor: 'transparent' }}>
                                        <EllipsisVertical size={18} />
                                    </button>
                                    {activeDropdownId === product.productId && (
                                        <div onMouseLeave={closeDropdown} style={{backgroundColor: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px', display: 'flex-direction: column', gap: '15px', minWidth: '120px', zIndex: '1'}}>
                                        <Link to={`/viewProduct/${product.productId}`}>
                                        <button className="text-black" style={{ border: 'none', backgroundColor: 'transparent' }}><View size={18} />  View</button>
                                        </Link>
                                        <Link to={`/IssueProduct/${product.productId}`}>
                                            <button className="text-black" style={{ border: 'none', backgroundColor: 'transparent' }}><BadgeAlert size={18} />  Issue</button>
                                        </Link>
                                        <Link to={`/PurchaseProduct/${product.productId}`}>
                                            <button className="text-black" style={{ border: 'none', backgroundColor: 'transparent' }}><ShoppingCart size={18} />  Purchase</button>
                                        </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminProductReport;