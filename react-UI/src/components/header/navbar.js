import React from 'react'
import './navbar.css'
class Navbar extends React.Component {
    render() {
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
                    <li className="nav-item-list"><a href="#"> HOME </a></li>
                    <li className="nav-item-list"><a href="#"> STORE </a> </li>
                    <li className="nav-item-list"><a href="#"> IPHONE </a> </li>
                    <li className="nav-item-list"><a href="#"> IPAD </a></li>
                    <li className="nav-item-list"><a href="#"> MACBOOK </a></li>
                    <li className="nav-item-list"><a href="#"> ACCESORIES </a></li>
                    </ul>
                   </div>
                </div>
            </>
        );
    }
}
export default Navbar;
