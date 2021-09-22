import React from 'react'
import ReactStars from "react-rating-stars-component";
import './productcard.css'
class ProductCard1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img1: props.img1,
            productname: props.productname,
            price : props.price,
            mrp : props.mrp
        }
    }
    render() {
        return (
            <>
                <div className="product-card-1 product-card-1-hover-effect">
                    <div class="card" >
                        <img src={this.state.img1} class="card-img-top mh-100" alt="product-card" />
                        <div class="card-body">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <i class="fa fa-shopping-cart"></i>
                            <h5 class="card-title">{this.state.productname}</h5>
                            <ReactStars
                                count={5}
                                size={24}
                                active ={4}
                                activeColor="#ffd700"
                            />
                            <p class="card-text"><span className="discount-price">${this.state.price}</span> <span className="real-price"> <del>${this.state.mrp}</del></span></p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ProductCard1;
