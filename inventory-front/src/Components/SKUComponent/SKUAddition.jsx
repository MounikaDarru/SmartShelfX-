import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../../LoginView.css';
import {save} from '../../Services/SKUService';
import { Link } from "react-router-dom";

const SKUAddition = () => {

    const [sku,setSKU] = useState({
            skuId : "" ,
            skuDescription : "" ,
        });
    
    let navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const  onChangeHandler = (event) =>{
    event.persist();
    const name = event.target.name;
        const value = event.target.value;
       setSKU(values =>({...values, [name]: value }));
     };

    const saveSku = (event) => {
        event.preventDefault();
        save(sku).then((response)=>{
            alert("New SKU Added");
            navigate('/AdminMenu');    
        });
    };

     const handleValidation = (event) => {
        event.preventDefault();
        let tempErrors = {};
        let isValid = true;
   
        if (!sku.skuId.trim()) {
          tempErrors.skuId = "SKU Id is required";
          isValid = false;
        }
   
        if (!sku.skuDescription.trim()) {
          tempErrors.skuDescription = "SKU DEscription is required";
          isValid = false;
        }

        setErrors(tempErrors);
        if (isValid) {
          saveSku(event);
        }
      };
  
       
    return (
        <div className="register-form-box" style={{diaplay:'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop:'200px', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <h2 style={{letterSpacing: '3px'}}>Add SKU</h2>
                <br/>
                <form className="form-box">
                    <div className="form-group">
                        <label>Sku Id</label>
                        <input placeholder="skuId" name="skuId" value={sku.skuId} onChange={(event) => onChangeHandler(event)}/>
                        {errors.skuId && <p>{errors.skuId}</p>}
                    </div>
                    <div className="form-group">
                        <label>Sku Description</label>
                        <input type="skuDescription" placeholder="skuDescription" name="skuDescription" value={sku.skuDescription} onChange={(event) => onChangeHandler(event)}/>
                        {errors.skuDescription && <p>{errors.skuDescription}</p>}
                    </div>
                    <br/>
                    <button className='btn btn-primary' onClick={handleValidation}>ADD</button>
                </form>
            </div>
    ) ;
}
export default SKUAddition ;