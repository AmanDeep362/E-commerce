import React from 'react'
import ReactStars from "react-rating-stars-component";

class FeatureProductCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            price : props.price,
            mrp : props.mrp,
            img : props.img
        }
    }
    render() {
        return (
            <>
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={this.state.img} class="img-fluid rounded-start feature-product-card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title feature-product-card-title">{this.state.title}</h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    active={4}
                                    activeColor="#ffd700"
                                />
                                <p class="card-text"><span className="discount-price">${this.state.price}</span> <span className="real-price"> <del>${this.state.mrp}</del></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default FeatureProductCard;
