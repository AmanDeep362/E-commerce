import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';
import Accesories from '../accesories/Accesories';
class Navbar extends React.Component {
   
    render() {

      function toggle() {
            document.getElementById("store-subnavbar").classList.toggle("sub-navbar-toggle")
        }
        
       
        return (
            <>
                <div className="navbar-container">
                
                    <div className="topnav-header">
                        <div className="language-select-dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            En
                        </a>
                        </div>
                        <div className="currency-select-dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                           $
                        </a>
                        </div>
                        <div className="myprofie">
                        <i class='far fa-user-circle'></i>My Profile
                        </div>
                        <div className="cart">
                        <i class="fa fa-shopping-cart"></i>2 items
                        </div>
                        <div className="search-icon">
                        <i class="fa fa-search"></i>
                        </div>
                    </div>
                    <hr className="topnav-divider" />
                    <div className="header-logo">
                    <h2 className="header-logo-text">iSHOP</h2>
                    </div>
                    <div className="navbar-container">
                    <ul className="navbar-item">
                    <li className="nav-item-list"><a href="#"> <NavLink to='/' >HOME</NavLink> </a></li>
                    <li className="nav-item-list" onClick={toggle} ><a href="#"> STORE </a>
                    
                     </li>
                    <li className="nav-item-list"><a href="#"> IPHONE </a> </li>
                    <li className="nav-item-list"><a href="#"> IPAD </a></li>
                    <li className="nav-item-list"><a href="#"> MACBOOK </a></li>
                    <li className="nav-item-list"><a href="#"> <NavLink to='/Accesories' activeStyle={{color:"#2E90E5"}}>Accesories</NavLink> </a></li>
                    </ul>
                   </div>
                   <div id="store-subnavbar" className="sub-navbar">
                   <div className="subnavbar-container">
                       <ul className="subnavbar-item">
                       <h6 className= "subnavbar-list-heading">ACCESORIES</h6>
                        
                        <li className="subnavbar-list">AirPort  Wireless     Docks</li>
                        <li className="subnavbar-list">AppleCare</li>
                        <li className="subnavbar-list">Bags, Shells  Sleeves Business</li>
                        <li className="subnavbar-list">Security Cables</li>
                        <li className="subnavbar-list">Docks</li>
                      </ul>
                      <ul className="subnavbar-item">
                        <li className="subnavbar-list">AppleCare</li>
                        <li className="subnavbar-list">Car  Travel</li>
                        <li className="subnavbar-list">Cases  Films</li>
                   
                       </ul>
                       
                       <ul className="subnavbar-item">
                       <h6 className= "subnavbar-list-heading">Categories</h6>
                        
                        <li className="subnavbar-list">Charging Devices    </li>
                        <li className="subnavbar-list">Connected Home</li>
                        <li className="subnavbar-list">Device Care</li>
                        <li className="subnavbar-list">Display  Graphic</li>
                        <li className="subnavbar-list"> Fitness  Sport</li>
                      </ul>
                      <ul className="subnavbar-item">
                        <li className="subnavbar-list">Headphones </li>
                        <li className="subnavbar-list">HealhKit</li>
                       
                       </ul>
                       <ul className="subnavbar-item">
                       <h6 className= "subnavbar-list-heading">Categories</h6>
                        
                        <li className="subnavbar-list">Mice  Keyboards     </li>
                        <li className="subnavbar-list">Music Creation</li>
                        <li className="subnavbar-list">Networking  Server</li>
                        
                      </ul>
                       </div>
                   </div>
                </div>
            </>
        );
    }
}
export default Navbar;
