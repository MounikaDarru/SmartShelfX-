import React, {useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import '../../LoginView.css';
import {showAllSKUs, removeSKU} from '../../Services/SKUService';

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
                    <button className='btn btn-primary' onClick={handleValidation}>ADD</button>
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
            <h2 className="text-center">SKU List</h2>
            <hr />
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
        </div>
    );
}

export default SKUReport;


// <div>
//             <br/>
//             <div className = ".container">
//                 <div className = "row">
//                     <div className = "card col-md-2 offset-md-3 offset-md-3">
//                         <div className = "login-box">
//                             <h2 className="text-center"><u>New User Registration</u> </h2>
//                             <br/>
//                             <form  method="post">
//                                 <div className = "form-group">
//                                     <label>SKU Description: </label>
//                                     <input placeholder="skuDescription" name="skuDescription" className="form-control"
//                                     value={sku.skuDescription} onChange={(event) => onChangeHandler(event)} />
//                                     {errors.skuDescription && <p style={{ color: "red" }}>{errors.skuDescription}</p>}
//                                 </div>
//                                 <br/>
//                                 <button className='btn btn-primary' onClick={handleValidation}>Update</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>