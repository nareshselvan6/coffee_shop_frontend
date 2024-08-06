import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import ForgetPassword from './Components/ForgetPassword';
import Resetpassword from './Components/Resetpassword';
import Products from './Components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import StripepaySuccess from './Stripepayment/StripepaySuccess';
import StripepayFailure from './Stripepayment/StripepayFailure';

const App = () => {
    const [cartQuantity, setCartQuantity] = useState([]);
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path= "/login" element={<LoginPage/>}/>
            <Route path= "/forgetpassword" element={<ForgetPassword/>}/>
            <Route path= "/resetpswrd/:id/:token" element={<Resetpassword/>}/>
            <Route path= "/products" element={<Products/>}/>
            <Route path="/stripaymentsuccess" element={<StripepaySuccess/>}/>
            <Route path="/stripaymentfailure" element={<StripepayFailure/>}/>
        </Routes>
        </BrowserRouter>

         
        </>
    );
};

export default App;