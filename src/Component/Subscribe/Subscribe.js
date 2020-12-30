import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {

    const [validEmail, setValidEmail] = useState(false);

    const handleBlur = (e) =>{
        let isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        if(isFieldValid){           
            setValidEmail(true);            
        }
        else{
            setValidEmail(false);
        }        
    }
    const subscribe = (e) => {
        if(validEmail){
            alert("Subscribe your email address successfully");
        }
        else{
            alert("Please enter your valid email address");
        }
        e.target.reset(); 
    } 
    return (
        <div className="subscribe-part">
           <div className="container mt-5 pt-5 mb-5 pb-5">
                <div className="subscribe-include-part pt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 d-flex justify-content-center">
                            <div className="">
                                <h2 className="text-dark" style={{color:'black',fontWeight:'bold'}}>Subscribe for newsletter</h2>
                                <p>Subscribe to our newsletter and we will<br/> bring you the latest news</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 d-flex justify-content-center">
                            <div className="subscribe-email-part">
                                <form onSubmit={subscribe}>
                                    <input onBlur={handleBlur} placeholder="Enter your mail address"/>
                                    <button type="submit" className="subscribe-button">Subscribe</button>
                                </form>                                
                            </div>
                        </div>
                    </div>
                </div>
           </div> 
        </div>
    );
};

export default Subscribe;