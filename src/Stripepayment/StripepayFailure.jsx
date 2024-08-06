import React from 'react';

import "../Stripepayment/Stripe.css"
import { useNavigate } from 'react-router-dom';


const StripepayFailure = () => {

    const navigate=useNavigate();

    setTimeout(() => {
        navigate("/track_expenses")
    }, 3000);
    
    return (
        <div>
                     <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="message-box _success _failed">
                     <i className="fa fa-times-circle" aria-hidden="true"></i>
                    <h2> Your payment failed </h2>
             <p>  Try again later </p> 
         
            </div> 
        </div> 
    </div> 
            
        </div>
    );
};

export default StripepayFailure;