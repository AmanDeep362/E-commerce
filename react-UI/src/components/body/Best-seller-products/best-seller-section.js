import React from 'react'
import ProductCard1 from '../../product-card/productcard1';
import './best-aeller-section.css'
import cardData from '../../product-card/card-data.json'
import macbookproImg from '../../../images/macbookpro.jpg'
import macbookairImg from '../../../images/macbookair.png'
import iphone6img from '../../../images/iphone-6.jpg'
import ipodimg from '../../../images/ipod.jpg'
import ipadimg from '../../../images/ipad.jpg'
import iwatchimg from '../../../images/iwatch.jpg'
import iphone11img from '../../../images/apple-iphone-11.jpg'
class BestSeller extends React.Component{
  render(){
      this.state={
          macbookimg : macbookproImg,
          macbookairimg : macbookairImg,
          iphone6img : iphone6img,
          iphone11img : iphone11img,
          ipodimg : ipodimg,
          ipadimg : ipadimg,
          iwatchimg : iwatchimg,
          productname1 :  "AppleMacbook pro",
          productname2 :  "AppleMacbook Air",
          productname3 :  "iPhone 6",
          productname4 :  "iPhone 11",
          price1 : 499,
          mrp1 : 699,
          data : cardData
      }
    return(
      <>
        <div className="best-seller-section">
            <div className="best-seller-section-heading">
                <h2>BEST SELLER</h2>
            </div>
            <div className="best-seller-section-navbar">
                <ul className="best-seller-section-navbar-item">
                    <li className="best-seller-section-navbar-list">All</li>
                    <li className="best-seller-section-navbar-list">Mac</li>
                    <li className="best-seller-section-navbar-list">iPod</li>
                    <li className="best-seller-section-navbar-list">iPad</li>
                    <li className="best-seller-section-navbar-list">iPhone</li>
                    <li className="best-seller-section-navbar-list">Acessories</li>
                </ul>
            </div>
            <div className="best-seller-section-card-container">
                <div className="best-seller-section-card1">
                    <ProductCard1 img1={this.state.macbookimg} productname={this.state.productname1} price={this.state.price1} mrp={this.state.mrp1} />
                    <ProductCard1 img1={this.state.macbookimg} productname={this.state.productname1} price={this.state.price1} mrp={this.state.mrp1} />
                    <ProductCard1 img1={this.state. macbookairimg} productname={this.state.productname2} price={this.state.data[0].price1} mrp={this.state.data[0].mrp1} />
                    <ProductCard1 img1={this.state.iphone6img} productname={this.state.productname3} price={this.state.data[0].price1} mrp={this.state.data[0].mrp1} />
                    <ProductCard1 img1={this.state.iphone11img} productname={this.state.productname4} price={this.state.data[0].price1} mrp={this.state.data[0].mrp1} />
                    <ProductCard1 img1={this.state.ipodimg} productname={this.state.productname4} price={this.state.data[0].price1} mrp={this.state.data[0].mrp1} />
                    <ProductCard1 img1={this.state.ipadimg} productname={this.state.productname4} price={this.state.data[0].price1} mrp={this.state.data[0].mrp1} />
                    <ProductCard1 img1={this.state.iwatchimg} productname={this.state.productname4} price={this.state.data[0].price1} mrp={this.state.data[0].mrp1} />
                </div>
                <div className="load-more-link">
                  Load more
                </div>
            </div>

        </div>
      </>
    );
  }
}
export default BestSeller;
