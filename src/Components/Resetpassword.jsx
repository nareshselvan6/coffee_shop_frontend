import React, { useState } from 'react';
import "../App.css";import { useNavigate, useParams } from 'react-router';
import axios from 'axios';


const Resetpassword = () => {
    const {id,token}=useParams();

    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const[registered,setRegistered]=useState()



    const resetpassword=async(e)=>{
        e.preventDefault();


        const payload={password};
        const response= `https://coffee-shop-backend-ex3n.onrender.com/auth/resetpswd/${id}/${token}`;

        try {
            await axios.put(response,payload)
            .then(res=>{setRegistered(res.data)
            }).catch((error)=>console.log(error));
        
            navigate('/', { replace: true })
            
        } catch (error) {
            console.log("error occured while reseting password" + error);
        }
    }
    return (
        <div>
            <div className='totalreset'>
            <div className='resetpassword blurred-div'>
             <form className='form reset' onSubmit={resetpassword} >
                <h2 className='black brown'>Reset Password</h2>
                    <label className='black brown'>New Password</label>
                    <input className='rstpswd' type="text" placeholder='*******' onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className='btn btn-success'>Update</button>
                   
                </form>
                </div>
                </div>
        </div>
    );
};

export default Resetpassword;