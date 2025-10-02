import React, {useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import '../SKUComponent/SKUReport.css';
import {showAllSKUs, removeSKU} from '../../Services/SKUService';
import { ChevronLeft, Pencil, Trash } from "lucide-react";

import { update } from "../../Services/SKUService";

export const SkuUpdate = () => {
    const {id} = useParams();
    let navigate = useNavigate();
    const [sku, setSKU] = useState({
        skuId: id,
        skuDescription: ""
    });

    const [errors, setErrors] = useState("");

    const  onChangeHandler = (event) =>{
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        setSKU(values =>({...values, [name]: value }));
     };

    const updateSku = (event) => {
        event.preventDefault();
        update(sku).then((response)=>{
            alert("SKU Updated");
            navigate('/SkuReport');    
        });
    };

    const handleCancel = (event) => {
        event.preventDefault();
        navigate('/SkuReport');
    }

    const handleValidation = (event) => {
        event.preventDefault();
        let tempErrors = {};
        let isValid = true;
   
        if (!sku.skuDescription.trim()) {
          tempErrors.skuDescription = "SKU DEscription is required";
          isValid = false;
        }

        setErrors(tempErrors);
        if (isValid) {
          updateSku(event);
        }
    };

    return (
            <div className="register-form-box" style={{diaplay:'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop:'200px', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <h2 style={{letterSpacing: '3px'}}>Update SKU</h2>
                <br/>
                <form className="form-box">
                    <div className="form-group">
                        <label>Sku Description</label>
                        <input type="skuDescription" placeholder="skuDescription" name="skuDescription" value={sku.skuDescription} onChange={(event) => onChangeHandler(event)}/>
                        {errors.skuDescription && <p>{errors.skuDescription}</p>}
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

const SKUReport = () => {

    let navigate = useNavigate();
    const [skuList, setSKUList] = useState([]);

    const displayAllSKUs=() =>{
        showAllSKUs().then((response)=>{
            setSKUList(response.data);
        });
    }

    useEffect(()=>{
        displayAllSKUs();
    },[])

    const returnBack=()=>{
        navigate('/AdminMenu');
    }

    const deleteSKU=(id)=>{
        removeSKU(id).then((response)=>{
            let remainingSKUs = skuList.filter(sku => sku.skuId !== id);
            setSKUList(remainingSKUs);
        });
        navigate('/SkuReport')
    }

    return (
        <div className="text-center">
            <div>
            <div onClick={returnBack} style={{display: 'flex', justifyContent: 'flex-start', cursor: 'pointer', margin: '20px', marginLeft: '50px', fontWeight: 'bold'}}><ChevronLeft />Back</div>
            </div>
            <div className="container">
                <div className="header">
                    <span>SKU ID</span>
                    <span>SKU DESCRIPTION</span>
                    <span>ACTIONS</span>
                </div>
                {skuList.map((sku) => (
                    <div className="item" key={sku.skuId}>
                        <span>{sku.skuId}</span>
                        <span>{sku.skuDescription}</span>
                        <span>
                            <Link to={`/update-sku/${sku.skuId}`}>
                                <button className="text-black rounded-full" style={{border: 'none', backgroundColor: 'transparent', marginRight: '10px'}}><Pencil size={18}/></button>
                            </Link>
                            <button onClick={() => deleteSKU(sku.skuId)} className="text-black p-2 rounded-full" style={{border: 'none', backgroundColor: 'transparent'}}><Trash size={18}/></button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SKUReport;