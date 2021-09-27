import React from 'react'
import ProductCard1 from '../../product-card/productcard1';
import './accesories-product.css'
import cardData from '../accesories-product-data.json'
import img1 from '../../../images/Accesories-product/product-1.png'
import img2 from '../../../images/Accesories-product/product-2.png'
import img3 from '../../../images/Accesories-product/product-3.png'
import img4 from '../../../images/Accesories-product/product-4.png'
import img5 from '../../../images/Accesories-product/product-5.png'
import img6 from '../../../images/Accesories-product/product-6.png'
import img7 from '../../../images/Accesories-product/product-7.png'
import img8 from '../../../images/Accesories-product/product-8.png'
import img9 from '../../../images/Accesories-product/product-9.png'
import img10 from '../../../images/Accesories-product/product-10.png'
import img11 from '../../../images/Accesories-product/product-11.png'
import img12 from '../../../images/Accesories-product/product-12.png'
class AccesoriesProductSection extends React.Component{
    state={
        productData : cardData,
        img1 :img1,
        img2 :img2,
        img3 :img3,
        img4 :img4,
        img5 :img5,
        img6 :img6,
        img7 :img7,
        img8 :img8,
        img9 :img9,
        img10 :img10,
        img11 :img11,
        img12 :img12,
    }
  render(){
    return(
      <>
       <ProductCard1 img1={this.state.img1} producname={this.state.productData[0].productname} price={this.state.productData[0].price}  mrp={this.state.productData[0].mrp}    />
       <ProductCard1 img1={this.state.img2} producname={this.state.productData[2].productname} price={this.state.productData[2].price}  mrp={this.state.productData[2].mrp}    />
       <ProductCard1 img1={this.state.img3} producname={this.state.productData[3].productname} price={this.state.productData[3].price}  mrp={this.state.productData[3].mrp}    />
       <ProductCard1 img1={this.state.img4} producname={this.state.productData[4].productname} price={this.state.productData[4].price}  mrp={this.state.productData[4].mrp}    />
       <ProductCard1 img1={this.state.img5} producname={this.state.productData[5].productname} price={this.state.productData[5].price}  mrp={this.state.productData[5].mrp}    />
       <ProductCard1 img1={this.state.img6} producname={this.state.productData[6].productname} price={this.state.productData[6].price}  mrp={this.state.productData[6].mrp}    />
       <ProductCard1 img1={this.state.img7} producname={this.state.productData[7].productname} price={this.state.productData[7].price}  mrp={this.state.productData[7].mrp}    />
       <ProductCard1 img1={this.state.img8} producname={this.state.productData[8].productname} price={this.state.productData[8].price}  mrp={this.state.productData[8].mrp}    />
       <ProductCard1 img1={this.state.img9} producname={this.state.productData[9].productname} price={this.state.productData[9].price}  mrp={this.state.productData[9].mrp}    />
       <ProductCard1 img1={this.state.img10} producname={this.state.productData[10].productname} price={this.state.productData[10].price}  mrp={this.state.productData[10].mrp}    />
       <ProductCard1 img1={this.state.img11} producname={this.state.productData[11].productname} price={this.state.productData[11].price}  mrp={this.state.productData[11].mrp}    />
       <ProductCard1 img1={this.state.img12} producname={this.state.productData[1].productname} price={this.state.productData[1].price}  mrp={this.state.productData[1].mrp}    />
      </>
    );
  }
}
export default AccesoriesProductSection;