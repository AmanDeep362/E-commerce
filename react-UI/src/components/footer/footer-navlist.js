import React from 'react'
import './footer-navlist.css'
import PaymentgatewayFooter from './payment-gateway-footer';
class FooterNav extends React.Component{
  render(){
    return(
      <>
        <div className="footer-container">
            
                <ul className="footer-item">
                    <li className="footer-list footer-heading">Infomation</li>
                    <li className="footer-list">About Us</li>
                    <li className="footer-list"> Infomation </li>
                    <li className="footer-list">Privacy Policy </li>
                    <li className="footer-list">Terms and Conditions</li>
                </ul>
                <ul className="footer-item">
                    <li className="footer-list footer-heading">Service</li>
                    <li className="footer-list">About Us</li>
                    <li className="footer-list"> Infomation </li>
                    <li className="footer-list">Privacy Policy </li>
                    <li className="footer-list">Terms and Conditions</li>
                </ul>
                <ul className="footer-item">
                    <li className="footer-list footer-heading">Extras</li>
                    <li className="footer-list">About Us</li>
                    <li className="footer-list"> Infomation </li>
                    <li className="footer-list">Privacy Policy </li>
                    <li className="footer-list">Terms and Conditions</li>
                </ul>
                <ul className="footer-item">
                    <li className="footer-list footer-heading">My Account</li>
                    <li className="footer-list">About Us</li>
                    <li className="footer-list"> Infomation </li>
                    <li className="footer-list">Privacy Policy </li>
                    <li className="footer-list">Terms and Conditions</li>
                </ul>
                <ul className="footer-item">
                    <li className="footer-list footer-heading">Userful Links</li>
                    <li className="footer-list">About Us</li>
                    <li className="footer-list"> Infomation </li>
                    <li className="footer-list">Privacy Policy </li>
                    <li className="footer-list">Terms and Conditions</li>
                </ul>
                <ul className="footer-item">
                    <li className="footer-list footer-heading">Our Offers</li>
                    <li className="footer-list">About Us</li>
                    <li className="footer-list"> Infomation </li>
                    <li className="footer-list">Privacy Policy </li>
                    <li className="footer-list">Terms and Conditions</li>
                </ul>
            
        </div>
                <PaymentgatewayFooter />
      </>
    );
  }
}
export default FooterNav;
