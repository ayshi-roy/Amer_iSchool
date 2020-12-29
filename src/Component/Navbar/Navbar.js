import React from 'react';
import logo from '../../images/logo.png';
import './Navbar.css';
import navbarLogo2 from '../../images/navbarLogo2.png';
import navbarLogo1 from '../../images/navbarLogo1.png';
import navbarLogo3 from '../../images/navbarLogo3.png';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">                
                <a className="navbar-brand" href="#">
                    <img src={logo} className="image-fluid" style={{height: '50px',marginLeft: '60px'}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
       
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link nav-bar" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-bar" href="#">About</a>
                        </li>                    
                        <li className="nav-item">
                            <a className="nav-link nav-bar" href="#">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-bar" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <img src={navbarLogo2} style={{height:'38px', marginRight: '20px'}}/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={navbarLogo3} style={{height:'28px', marginRight: '20px'}}/>
                            </a>
                        </li>                    
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                <img src={navbarLogo1} style={{height:'28px', marginRight: '20px'}}/>
                            </a>
                        </li>
                    </ul>                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;