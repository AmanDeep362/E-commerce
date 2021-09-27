import React from 'react'
import img1 from '../../images/western-union.png'
import img2 from '../../images/Visa-card.png'
import img3 from '../../images/mastercard.png'
import img4 from '../../images/paypal.png'
class PaymentgatewayFooter extends React.Component{
  render(){
    return(
      <>
       <div className="payment-gateway-footer-container">
       <img src={img1} class="img-fluid" alt="..."/>
       <img src={img2} class="img-fluid" alt="..."/>
       <img src={img3} class="img-fluid" alt="..."/>
       <img src={img4} class="img-fluid" alt="..."/>
      
       </div>
      </>
    );
  }
}
export default  PaymentgatewayFooter;
