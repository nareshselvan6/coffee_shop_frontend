import React from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate= useNavigate();
    return (
        <div >
            <div className='welcome_div'>
                <h1 className='welcome_cafe'>Welcome To Elite Cafe <i className="fa fa-bolt lcbolt" aria-hidden="true" /></h1>
                <button className='btn click_here_home' onClick={()=>navigate("/login")}>Click Here For Login  <i className="fa fa-bolt wellig" aria-hidden="true" /></button>
            </div>
        </div>
    );
};

export default Home;