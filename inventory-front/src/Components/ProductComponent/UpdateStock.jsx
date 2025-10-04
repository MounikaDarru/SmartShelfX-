import { stockEdit, getProductById } from '../../Services/ProductService';
import { getUserRole } from '../../Services/LoginService';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { update } from '../../Services/SKUService';

const UpdateStock = () => {
    const {id, flag} = useParams();
    let navigate = useNavigate();

    const [ product, setProduct] = useState({
        productId: id,
        stock: ""
    });

    const [errors, setErrors] = useState("");
    const [role, setRole] = useState("");

    let [ quantity, setQuantity ] = useState(0);
    
    const updateStock = (event) => {
        event.preventDefault();
        stockEdit(product, quantity, flag).then((response)=>{
            alert("Stock Updated");
            if(role === "Admin"){
                navigate('/AdminProductReport');
            }
            else if(role === "Manager"){
                navigate('/ManagerProductReport');
            }   
            });
    }

    const setUserRole = () => {
        getUserRole().then((response) => {
            setRole(response.data);
        })
    }

    useEffect(() => {
        setUserRole();
        getProductById(id).then((response) => {
            setProduct(response.data);
        });
    }, [id]);

    useEffect(() => {
        setQuantity(parseFloat(product.stock));
    }, [product.stock]);


    const handleCancel = () => {
        if(role === "Admin"){
            navigate('/AdminProductReport');
        }
        else if(role === "Manager"){
            navigate('/ManagerProductReport');
        }
    }

    const handleValidation = (event) => {
        event.preventDefault();
        let tempErrors = {};
        let isValid = true;
   
        if (quantity === '' || isNaN(quantity)) {
          tempErrors.stock = "Stock is required";
          isValid = false;
        }

        setErrors(tempErrors);
        if (isValid) {
          updateStock(event);
        }
    };

    return (
            <div className="register-form-box" style={{diaplay:'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop:'200px', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <h2 style={{letterSpacing: '3px'}}>Update Price</h2>
                <br/>
                <form className="form-box">
                    <div className="form-group">
                        <label>Stock</label>
                        <input type="text" placeholder="stock" name="quantity" value={ isNaN(quantity) ? '' : quantity } onChange={(e) => setQuantity(parseFloat(e.target.value))}/>
                        {errors.purchasePrice && <p>{errors.stock}</p>}
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

export default UpdateStock