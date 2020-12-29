import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe-part">
           <div className="container mt-5 pt-5 mb-5 pb-5">
                <div className="subscribe-include-part pt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 d-flex justify-content-center">
                            <div className="">
                                <h2 className="text-dark">Subscribe for newsletter</h2>
                                <p>Subscribe to our newsletter and we will<br/> bring you the latest news</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 d-flex justify-content-center">
                            <div className="subscribe-email-part">
                                <input type="email" placeholder="Enter your mail address"/>
                                <button className="subscribe-button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
           </div> 
        </div>
    );
};

export default Subscribe;