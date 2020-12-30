import React from 'react';
import './Services.css';

const Service = () => {
    return (
        <div className="container">
            <div className="service-part mt-5">
                <h1 className="text-center" style={{fontSize:'40px',color:'black',fontWeight:'bold'}}>WHY CHOOSE US</h1>
                <div className="container mt-3 pb-5">
                    <div className="col-lg-8 col-md-8 offset-md-2 col-sm-12 col-12">
                        <div className="service-image">
                            <div className="row mt-5 pt-5">
                                <div className="col-lg-4 col-md-4 col-12 col-sm-12 d-flex justify-content-center">
                                    <div className="">
                                        <h1 className="service-text">1058+</h1>
                                        <p className="ml-5">LEARNERS</p>
                                    </div>                                    
                                </div>
                                <div className="col-md-4 col-md-4 col-12 col-sm-12 d-flex justify-content-center">
                                    <div className="ml-5">
                                        <h1 className="service-text">50+</h1>
                                        <p>COURSES</p>
                                    </div>    
                                </div>
                                <div className="col-md-4 col-md-4 col-12 col-sm-12 d-flex justify-content-center">
                                    <div className="ml-4">
                                        <h1 className="service-text">13+</h1>
                                        <p>PROJECTS</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>                     
                </div>
            </div>
        </div>
    );
};

export default Service;