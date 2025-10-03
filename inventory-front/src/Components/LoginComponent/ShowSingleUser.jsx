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
         <div style={{display:'flex', justifyContent:'center', marginTop:'150px'}}>
               <br></br>
                <div style={{padding:'50px', backgroundColor:'white', borderRadius:'10px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width:'500px'}}>
                    <h3 style={{fontWeight:'bold', textAlign:'center', marginBottom:'30px'}}>User Details</h3>
                     <table>
                        <tbody className="text-left">
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>User Id:</td>
                                <td style={{padding:'5px 30px'}}>{inventoryUser.username}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Personal Name:</td>
                                <td style={{padding:'5px 30px'}}>{inventoryUser.personalName}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Email:</td>
                                <td style={{padding:'5px 30px'}}>{inventoryUser.email}</td>
                            </tr>
                            <tr>
                                <td style={{padding:'5px 30px', fontWeight:'500'}}>Role:</td>
                                <td style={{padding:'5px 30px'}}>{inventoryUser.role}</td>
                            </tr>
                        </tbody>
                     </table>
                     <div style={{display:'flex', justifyContent:'center', fontWeight:'bold', marginTop:'30px'}}>
                        <button className="btn btn-primary" onClick={returnBack}>CLOSE</button>
                     </div>
                </div>
            </div>
    )
}

export default ShowSingleUser