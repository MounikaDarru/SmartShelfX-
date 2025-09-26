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
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
