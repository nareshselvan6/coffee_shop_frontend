import React, { useState } from 'react';
import "../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [registered,setRegistered]=useState()
  const navigate=useNavigate();
  
    const signup=async(e)=>{
      e.preventDefault();
      const payload={username,email,password}      

    try {
      await axios.post("https://coffee-shop-backend-ex3n.onrender.com/auth/register",payload)
      .then(res=>{setRegistered(res.data)}).catch((error)=>console.log(error))
  navigate('/login')
    } catch (error) {
      console.error(error);
    }

      
    }
            

    return (
        <div>
          <div className='totalcontent_register'>
          <div className='registerpage blurred-div'>
          <div className='pagetitle'>
          <h2 className=' black red'>Register Here!</h2>
          </div>
          <div className='content-body'>
                <form className='form' onSubmit={signup}>
                  <label className='black red'> UserName</label>
                    <input className='reg' type="text" placeholder='johndoe16'  onChange={(e) => setUsername(e.target.value)}/>
                    <label className='black red'>Email</label>
                    <input className='reg' type="email" placeholder='johndoe@gmail.com'  onChange={(e) => setEmail(e.target.value)}/>
                    <label className='black red'>Password</label>
                    <input className='reg' type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className='btn btn-primary'>Signup</button>
                    <Link to="/login" className='black text-decoration-none red' >Already Have An Account</Link>
                </form>
            </div>
          </div>
          </div>
          </div>

    );
};

export default RegisterPage;