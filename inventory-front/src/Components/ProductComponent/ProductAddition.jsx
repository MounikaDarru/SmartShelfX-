import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addProduct } from "../../Services/ProductService";
import '../../LoginView.css';

const ProductAddition = () => {
    const [product, setProduct] = useState({
        productId: "",
        vendorId: "",
        productName: "",
        sku: "",
        purchasePrice: "",
        salesPrice: "",
        reorderLevel: "",
        stock: ""
    })

    let navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const  onChangeHandler = (event) =>{
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
       setProduct(values =>({...values, [name]: value }));
    };

    const saveProduct = (event) => {
            event.preventDefault();
            addProduct(product).then((response)=>{
            alert("New Product Added");
            navigate('/AdminMenu');    
        });
    };

    const handleValidation = (event) => {
        event.preventDefault();
        let tempErrors = {};
        let isValid = true;
   
        if (!product.productId.trim()) {
          tempErrors.productId = "Product Id is required";
          isValid = false;
        }
   
        if (!product.productName.trim()) {
          tempErrors.productName = "Product Name is required";
          isValid = false;
        }

        if(!product.sku.trim()) {
            tempErrors.sku = "SKU is required"
            isValid = false;
        }

        if(!product.purchasePrice.trim()) {
            tempErrors.purchasePrice = "Purchase Price is required"
            isValid = false;
        }

        if(!product.salesPrice.trim()) {
            tempErrors.salesPrice = "Sales Price is required"
            isValid = false;
        }

        if(!product.reorderLevel.trim()) {
            tempErrors.reorderLevel = "Reorder Level is required"
            isValid = false;
        }

        if(!product.stock.trim()) {
            tempErrors.stock = "Stock is required"
            isValid = false;
        }

        setErrors(tempErrors);
        if (isValid) {
          saveProduct(event);
        }
      };


      return(
        <div className="register-form-box" style={{diaplay:'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop:'50px', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <h2 style={{letterSpacing: '3px'}}>Add Product</h2>
            <br/>
            <form className="form-box">
                <div className="form-group">
                    <label>Product Id</label>
                    <input placeholder="productId" name="productId" value={product.productId} onChange={(event) => onChangeHandler(event)}/>
                    {errors.productId && <p>{errors.productId}</p>}
                </div>
                <div className="form-group">
                    <label>Vendor Id</label>
                    <input placeholder="vendorId" name="vendorId" value={product.vendorId} onChange={(event) => onChangeHandler(event)}/>
                    {errors.vendorId && <p>{errors.vendorId}</p>}
                </div>
                <div className="form-group">
                    <label>Product Name</label>
                    <input placeholder="productName" name="productName" value={product.productName} onChange={(event) => onChangeHandler(event)}/>
                    {errors.productName && <p>{errors.productName}</p>}
                </div>
                <div className="form-group">
                    <label>SKU</label>
                    <input placeholder="sku" name="sku" value={product.sku} onChange={(event) => onChangeHandler(event)}/>
                    {errors.sku && <p>{errors.sku}</p>}
                </div>
                <div className="form-group">
                    <label>Purchase Price</label>
                    <input placeholder="purchasePrice" name="purchasePrice" value={product.purchasePrice} onChange={(event) => onChangeHandler(event)}/>
                    {errors.purchasePrice && <p>{errors.purchasePrice}</p>}
                </div>
                <div className="form-group">
                    <label>Sales Price</label>
                    <input placeholder="salesPrice" name="salesPrice" value={product.salesPrice} onChange={(event) => onChangeHandler(event)}/>
                    {errors.salesPrice && <p>{errors.salesPrice}</p>}
                </div>
                <div className="form-group">
                    <label>Reorder Level</label>
                    <input placeholder="reorderLevel" name="reorderLevel" value={product.reorderLevel} onChange={(event) => onChangeHandler(event)}/>
                    {errors.reorderLevel && <p>{errors.reorderLevel}</p>}
                </div>
                <div className="form-group">
                    <label>Stock</label>
                    <input placeholder="stock" name="stock" value={product.stock} onChange={(event) => onChangeHandler(event)}/>
                    {errors.stock && <p>{errors.stock}</p>}
                </div>
                <br/>
                <button className='btn btn-primary' onClick={handleValidation}>ADD</button>
            </form>
        </div>
      )
}

export default ProductAddition