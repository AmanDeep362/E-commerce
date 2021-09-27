import React from 'react'
import './feature-product.css'
import FeatureProductCard from './feature-product-card';
import FeatureProductdata from './feature-product-data.json';
import img1 from '../../../images/philips_hue.jpg'
import img2 from '../../../images/h-suquad.jpg'
import img3 from '../../../images/Netatmo_rain.jpg'
class FeatureProduct extends React.Component {
    
        state ={
            FeatureProductData :  FeatureProductdata,
            img1 : img1,
            img2 : img2,
            img3 : img3
        }
    
    render() {
        return (
            <>
                <div className="feature-product-container">
                    <h2 className="feature-product-heading">FEATURED PRODUCTS</h2>
                    <div className="feature-product-card-container">
                          <FeatureProductCard img={this.state.img1} title={this.state.FeatureProductData[0].title} price={this.state.FeatureProductData[0].price} mrp={this.state.FeatureProductData[0].mrp} />
                          <FeatureProductCard img={this.state.img2} title={this.state.FeatureProductData[1].title} price={this.state.FeatureProductData[1].price} mrp={this.state.FeatureProductData[1].mrp} />
                          <FeatureProductCard img={this.state.img3} title={this.state.FeatureProductData[2].title} price={this.state.FeatureProductData[2].price} mrp={this.state.FeatureProductData[2].mrp} />
                    </div>
                </div>
            </>
        );
    }
}
export default FeatureProduct;
