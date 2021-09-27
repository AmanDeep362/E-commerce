import React from 'react'
import BestSeller from '../body/Best-seller-products/best-seller-section';
import Banner from '../body/crousal-banner/banner';
import FeatureProduct from '../body/feature-product/feature-product';
import InfoSection from '../body/info-section/info-section';
import ProductBanner from '../body/product-banner/product-banner';


class Body extends React.Component{
  render(){
    return(
      <>
       <Banner />
       <BestSeller />
       <ProductBanner />
      <InfoSection />
      <FeatureProduct />
      </>
    );
  }
}
export default Body;
