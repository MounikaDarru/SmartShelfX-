import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from "../../Services/ProductService";
import { updateProductPrice } from "../../Services/ProductService";

const UpdateProductPrice = () => {
    const {id} = useParams();
    let navigate = useNavigate();
    const [product, setProduct] = useState({
        productId: id,
        productPrice: ""
    });

    const [errors, setErrors] = useState("");

    useEffect(() => {
        getProductById(id).then((response) => {
            setProduct(response.data);
        });
    }, [id]);


    const  onChangeHandler = (event) =>{
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        setProduct(values =>({...values, [name]: value }));
     };

    const updatePrice = (event) => {
        event.preventDefault();
        updateProductPrice(product).then((response)=>{
            alert("Product Price Updated");
            navigate('/AdminProductReport');    
        });
    };

    const handleCancel = (event) => {
        event.preventDefault();
        navigate('/AdminProductReport');
    }

    const handleValidation = (event) => {
        event.preventDefault();
        let tempErrors = {};
        let isValid = true;
   
        if (!product.productPrice.trim()) {
          tempErrors.productPrice = "Product Price is required";
          isValid = false;
        }

        setErrors(tempErrors);
        if (isValid) {
          updatePrice(event);
        }
    };

    return (
            <div className="register-form-box" style={{diaplay:'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop:'200px', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <h2 style={{letterSpacing: '3px'}}>Update Price</h2>
                <br/>
                <form className="form-box">
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" placeholder="productPrice" name="productPrice" value={product.productPrice} onChange={(event) => onChangeHandler(event)}/>
                        {errors.productPrice && <p>{errors.productPrice}</p>}
                    </div>
                    <br/>
                    <div style={{ display: 'flex', gap: '10px', justifyContent:'center' }}>
                      <button className='btn bt-outline-primary text-primary text-decoration-none' onClick={handleCancel} style={{ marginRight: '10px', border: '1px solid #0d6efd', color: '#0d6efd', background: 'white', width:'200px', fontWeight: 'bold' }}>CANCEL</button>
                      <button className='btn btn-primary' onClick={handleValidation} style={{width:'200px', fontWeight: 'bold'}}>UPDATE</button>
                    </div>
                </form>
            </div>
    ) ;

}

export default UpdateProductPrice