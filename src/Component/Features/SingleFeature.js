import React from 'react';
import './Features.css';

const SingleFeature = ({feature}) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
            <div className="feature mb-5">
                <div className="feature-icon">
                    <img src={feature.img}/>
                </div>
                <div className="feature-text">
                    <h4 className="text-center">{feature.name}</h4>
                </div>
            </div>
        </div>
    );
};

export default SingleFeature;