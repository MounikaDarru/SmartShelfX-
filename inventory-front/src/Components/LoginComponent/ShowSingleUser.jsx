import React, {useState, useEffect} from "react";
import { getSingleUserDetails } from "../../Services/LoginService";
import { useNavigate } from "react-router-dom";

const ShowSingleUser = () => {
    const[inventoryUser, setInventoryUser] = useState({
        username: "",
        personalName:"",
        password: "",
        email: "",
        role: ""
    });

    let navigate = useNavigate();

    const showUser=()=>{
        getSingleUserDetails().then(response=>{
            setInventoryUser(response.data);  
        });
    }

    useEffect(() => {
        showUser();
    }, []);
         
    const returnBack=()=>{
        if(inventoryUser.role==='Manager')
            navigate('/ManagerMenu');  
        else if(inventoryUser.role==='Vendor')
              navigate('/VendorMenu');
    }

    return(
        <div>
            <br></br>
                <div className = "container">
                <div className = "row">
                    <div className = "card col-md-12 offset-md-3 offset-md-3">
                        <div className = "card-body">
                            <h2 className="text-center"><u>User Details</u></h2>
                            <br/>
                            <div className = "form-group">
                                <label>User Id: </label>
                                <label>{inventoryUser.username} </label>
                            </div>
                            <div className = "form-group">
                                <label>Personal Name: </label>
                                <label>{inventoryUser.personalName}</label>
                            </div>
                            <div className = "form-group">
                                <label>Email: </label>
                                <label>{inventoryUser.email}</label>
                            </div>
                            <div className = "form-group">
                                <label>Role: </label>
                                <label>{inventoryUser.role}</label>
                            </div>
                            <div>
                                <button className="btn btn-warning" onClick={returnBack}>Return</button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowSingleUser