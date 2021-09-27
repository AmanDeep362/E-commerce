import React from 'react'
import ProductBanner from '../body/product-banner/product-banner';
import Footer from '../main/Footer';
import Header from '../main/header';
import AccesoriesProductSection from './accesories-product/acessories-product';
import './accessories.css'
class Accesories extends React.Component{
  render(){
  //  var priceRangerValue = document.getElementById("price-ranger-value").value; 
    return(
      <>
       <Header />
       <div className="accesories-path-section">
           <p className="accesories-path-section-title">STORE/ACCESORIES</p>
       </div>
      
       <span className="Accesories-crousal-banner">
         <ProductBanner />
       </span>
       <span className="accesories-product-container">
            <AccesoriesProductSection />
          </span>
       <span className="product-filter-section">
          <div className="accesories-filter-card">
            <ul className="accesories-filter-card-item">
              <li className="accesories-filter-card-list fw-bold" >ACCESORIES</li>
              <li className="accesories-filter-card-list" >Apple Car &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;48</li>
              <li className="accesories-filter-card-list" >Air port and wireless  &nbsp; &nbsp;    23</li>
              <li className="accesories-filter-card-list" >Cables and Docks  &nbsp; &nbsp; &nbsp; &nbsp;  74</li>
              <li className="accesories-filter-card-list" >Cases and Films  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 69</li>
              <li className="accesories-filter-card-list" >Charging Devices  &nbsp; &nbsp; &nbsp; &nbsp;  80</li>
              <li className="accesories-filter-card-list" >Headphones  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4</li>
            </ul>
              </div>
            <div className="price-filter-card">
              <p className="price-filter-card-title fw-bolder">Price</p>
              <p>Ranger $13.99 to $49.99</p>
            <input type="range" id="price-ranger-value" name="vol" min="13.99" max="49.99"/>
          </div>
          <div className="color-filter-card">
          <p className="color-filter-card-title fw-bolder">Color</p>
           <div className="color-picker">
            <input type="color"></input>
           </div>
           </div>
           <div className="Brand-filter-card">
            <ul className="accesories-filter-card-item">
              <li className="accesories-filter-card-list fw-bold" >Brand</li>
              <li className="accesories-filter-card-list" >Apple &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;  48</li>
              <li className="accesories-filter-card-list" >Lg  &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;   13</li>
              <li className="accesories-filter-card-list" >Samsung &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  44</li>
              <li className="accesories-filter-card-list" >Lenovo  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;39</li>
              
            </ul>
              </div>
       </span>
      
          <div className="accesories-footer">
          <hr />
             <Footer /></div>
         
      </>
    );
  }
}
export default Accesories;
