import { useParams, useNavigate } from "react-router-dom"
import { getStockTransactions } from "../../Services/StockTransactionsService"
import { getUserRole } from "../../Services/LoginService"
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";

import './StockList.css';

const StockList = () => {
    const { transactionType } = useParams();
    let navigate = useNavigate();

    const [ stockTransactionList, setStockTransactionList ] = useState([]);

    const [ role, setRole ] = useState("");

    const displayStockTransactions = (transactionType) => {
        getStockTransactions(transactionType).then((Response) => {
            setStockTransactionList(Response.data);
        }).catch((error) => {
            console.log(error);
        })
    };

    const setUserRole = () => {
        getUserRole().then((response) => {
            setRole(response.data);
        })
    }

    useEffect(() => {
        displayStockTransactions(transactionType);
        setUserRole();
    }, []);

    const returnBack = () => {
        if(role === "Admin"){
            navigate('/AdminMenu');
        }
        else if(role === "Manager"){
            navigate('/ManagerMenu');
        }
    }

    return (
        <div className="text-center">
            <div>
                <div onClick={returnBack} style={{display: 'flex', justifyContent: 'flex-start', cursor: 'pointer', margin: '20px', marginLeft: '50px', fontWeight: 'bold'}}><ChevronLeft />Back</div>
                </div>
            <div className="container">
                <div className="stock-header">
                    <span>Transaction ID</span>
                    <span>Transaction Type</span>
                    <span>Product ID</span>
                    <span>Quantity</span>
                    <span>Transaction Value</span>
                    <span>User ID</span>
                    <span>Transaction Date</span>
                </div>
                {stockTransactionList.map((transaction) => (
                    <div className="stock-item" key={transaction.transactionId}>
                        <span>{transaction.transactionId}</span>
                        <span>{transaction.transactionType}</span>
                        <span>{transaction.productId}</span>
                        <span>{transaction.quantity}</span>
                        <span>{transaction.transactionValue}</span>
                        <span>{transaction.userId}</span>
                        <span>{transaction.transactionDate}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StockList