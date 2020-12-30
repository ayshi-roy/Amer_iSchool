import React from 'react';
import feature1 from '../../images/feature1.png';
import feature2 from '../../images/feature2.png';
import feature3 from '../../images/feature3.png';
import SingleFeature from './SingleFeature';
import './Features.css';

const allFeature = [
    {name: 'FULL LIFE TIME ACCESS',img: feature1},
    {name: 'CERTIFICATE OF COMPLETION', img: feature2},
    {name: 'ACCESS ON MOBILE AND TV', img: feature3}
]

const Features = () => {
    return (
        <div className="features mt-5 pt-5">
            <div className="container">
                <div className="feature-text">
                    <h2 className="text-center" style={{fontSize:'40px',color:'black',fontWeight:'bold'}}>OUR EXCLUSIVE FEATURES</h2>
                </div>
                <div className="row mt-5 pt-5">
                    {
                        allFeature.map(feature => <SingleFeature feature={feature} key={feature.name}></SingleFeature>)
                    }
                </div>
            </div>            
        </div>
    );
};

export default Features;