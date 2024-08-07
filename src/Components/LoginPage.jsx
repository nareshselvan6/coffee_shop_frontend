import React, { useState } from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [registered,setRegistered]=useState();
      const navigate=useNavigate();

        const login=async(e)=>{
          e.preventDefault();
          const payload={email,password}
          try {
             await axios.put("https://coffee-shop-backend-ex3n.onrender.com/auth/login",payload)
             .then(res=>{setRegistered(res.data)}).catch((error)=>console.log(error));

             if (email===registered.loginuser.email) {
                navigate("/products")
             }

          } catch (error) {
            console.error(error);
            
          }
           
        }            

    return (
        <div>
             <div className='totallogincontent'>
          <div className='Loginpage'>
          <div className='pagetitle'>
          <h2 className='black'>Login Here!</h2>
          </div>
          <div className='content-body'>
                <form className='form' onSubmit={login} >
                    <label className='white black'>Email</label>
                    <input className='log' type="email" placeholder='johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
                    <label className='white black'>Password</label>
                    <input className='log' type="password" placeholder="*******"  onChange={(e) => setPassword(e.target.value)}/>
                    <Link to="/forgetPassword" className='white black'>Forgot Password?</Link>
                    <Link to="/register" className='white black' >Dont Have An Account, Register Here !</Link>
                    <button type='submit' className='btn btn-primary '>Login</button>
                   
                </form>
            </div>
          </div>
          </div>
           
          </div>
    );
};

export default LoginPage;