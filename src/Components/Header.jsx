import React from 'react';

const Header = () => {
    return (
        <>
         <header className=" header bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Elite Taste in Every Bite <i className="fa fa-bolt" aria-hidden="true"/></h1>
                    <p className="lead fw-normal text-white-50 mb-0">"At Elite Cafe, our flavors strike like Rich, making your taste buds dance with every bite." <i className="fa fa-bolt" aria-hidden="true"/></p>
                </div>
            </div>
        </header>   
        </>
    );
};

export default Header;