import React from 'react'
import './product-banner.css'
import iphone11bannerimg from '../../../images/iphone_11_PNG42.png'
class ProductBanner extends React.Component{
  render(){
    return(
      <>
       <div className="prodduct-banner-container">
              <img src={iphone11bannerimg} className="img-fluid banner-img" alt="bannerimg"/>
           <span className="prodduct-banner-producttitle">iPhone 11</span> <br/>
           <span className="prodduct-banner-product-description">Performance and design. Taken right to the edge.1</span>  <br/>
           <span className="prodduct-banner-product-link">
               <a>Shop now</a>
           </span>
       </div>
      </>
    );
  }
}
export default ProductBanner;
