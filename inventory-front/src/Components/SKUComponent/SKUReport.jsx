import React, {useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import '../../LoginView.css';
import {showAllSKUs, removeSKU} from '../../Services/SKUService';
import { ChevronLeft } from "lucide-react";

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
                <h2 style={{letterSpacing: '3px'}}>Add SKU</h2>
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
                      <button className='btn btn-primary' onClick={handleValidation} style={{width:'200px', fontWeight: 'bold'}}>ADD</button>
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
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th>SKU ID</th>
                        <th>SKU Description</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skuList.map((sku) => (
                        <tr key={sku.skuId}>
                            <td>{sku.skuId}</td>
                            <td>{sku.skuDescription}</td>
                            <td>
                            <Link to={`/update-sku/${sku.skuId}`}>
                                <button className="btn btn-info">Update</button>
                            </Link>
                            </td>
                            <td>
                            <button
                                onClick={() => deleteSKU(sku.skuId)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SKUReport;