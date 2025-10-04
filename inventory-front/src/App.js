import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginComponent/LoginPage";
import RegisterUser from "./Components/LoginComponent/RegisterUser";
import AdminMenu from "./Components/LoginComponent/AdminMenu";
import ManagerMenu from "./Components/LoginComponent/ManagerMenu";
import VendorMenu from './Components/LoginComponent/VendorMenu';
import ShowSingleUser from './Components/LoginComponent/ShowSingleUser';
import SKUAddition from './Components/SKUComponent/SKUAddition';
import SKUReport from './Components/SKUComponent/SKUReport';
import { SkuUpdate } from './Components/SKUComponent/SKUReport';
import ProductAddition from './Components/ProductComponent/ProductAddition';
import AdminProductReport from './Components/ProductComponent/AdminProductReport';
import UpdateProductPrice  from './Components/ProductComponent/UpdateProductPrice';
import ViewProduct from './Components/ProductComponent/ViewProduct';
import ManagerProductReport from './Components/ProductComponent/ManagerProductReport';
import UpdateStock from './Components/ProductComponent/UpdateStock';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path="/Register" element={<RegisterUser/>}/>
        <Route path='/ShowSingleUser' element={<ShowSingleUser />} />
        <Route path="/AdminMenu" element={<AdminMenu/>}/>
        <Route path="/ManagerMenu" element={<ManagerMenu/>}/>
        <Route path='/VendorMenu' element={<VendorMenu />} />
        <Route path="/SkuAdd" element={<SKUAddition />} />
        <Route path="/SkuReport" element={<SKUReport />} />
        <Route path="/update-sku/:id" element={<SkuUpdate />} />
        <Route path="/addProduct" element={<ProductAddition />} />
        <Route path="/AdminProductReport" element={<AdminProductReport />} />
        <Route path="/updateProductPrice/:id" element={<UpdateProductPrice />} />
        <Route path="/viewProduct/:id" element={<ViewProduct />} />
        <Route path='/ManagerProductReport' element={<ManagerProductReport />} />
        <Route path='/IssueProduct/:id/:flag' element={<UpdateStock />} />
        <Route path='/PurchaseProduct/:id/:flag' element={<UpdateStock />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
