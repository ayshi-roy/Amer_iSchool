import React from 'react';
import logo from '../../images/logo.png';
import './Navbar.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="#">
                    <img src={logo} className="image-fluid" style={{height: '50px',marginLeft: '60px'}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                             <a className="nav-link nav-bar" href="#">Home </a>
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
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <SearchIcon style={{fontSize:'30px', color:'#4C4C4C', marginRight: '20px'}}/>                                 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <AddShoppingCartIcon style={{fontSize:'30px', color:'#4C4C4C', marginRight: '20px'}}/>                                 
                            </a>
                        </li>                    
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                <AppsIcon style={{fontSize:'30px', color:'#4C4C4C', marginRight: '20px'}}/>                                 
                            </a>
                        </li>
                    </ul>                   
                </div>
            </nav>
       </div>
       
        
    );
};

export default Navbar;