import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

const Products = ( ) => {

    const [cartQuantity, setCartQuantity] = useState([]);


    const [cartcount,setCartcount]=useState([])
    const [foodmenu,setFoodmenu]=useState([])
    const [cartitems,setCartitems]=useState([])
    
    // get
    const datafetch=async()=>{
        try {
            await axios.get("https://coffee-shop-backend-ex3n.onrender.com/fooditem/getfood")
            .then(res=>setFoodmenu(res.data));
        } catch (error) {
            console.log(error);    
        }
    }

    useEffect(()=>{
        datafetch()
    },[])
    
    return (
        <>
          <NavBar cartQuantity={cartQuantity} /> 
          <Header/>
          <div className='ttpd'>
            <div className=" totalcontent_products container px-4 px-lg-5 mt-0">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {foodmenu?.getfood?.map((element,index)=>{
                        return(
                              <div className="col mb-5" key={element._id}>
                        <div className="card h-100 mt-4 mb-4 ">
                            
                        <img className="card-img-top" src="https://www.shutterstock.com/image-vector/rice-dish-deep-bowl-herbs-600nw-2277508955.jpg" alt="FriedRice" />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <p className="fw-bolder"> <b>Dish:  </b>{element.name}</p>
                                    <p className="fw-bolder"> <b> Description: </b> {element.description}</p>
                                    <p className="fw-bolder"> <b>Price:</b> {element.price}rs</p>

                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                               
                                    {cartcount.filter((e)=>e._id===element._id).length !== 0?  <button className="btn btn-outline-dark mt-auto btn-danger " onClick={()=>{
                                      const res=  cartcount.filter((e)=>e._id!==element._id)
                                      
                                      setCartcount([...res]
                                      )
                                      setCartQuantity([...res])
                                         }}>Remove From Cart</button>: <button className="btn btn-outline-dark mt-auto" onClick={()=>{ setCartcount([...cartcount,element])
                                         setCartQuantity([...cartcount,element])}}>Add to Cart</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })}
                  
                </div>
            </div>
            </div>
            <Footer/> 
                 
        </>
    );
};

export default Products;