import React from 'react'

class InfoSectioncard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             title : props.title,
             img : props.img,
             desc : props.desc
             
        }
    }
    render() {
        console.log(this.props.img)
        return (
            <>
                <div className="info-section-card-container">
                    <div class="card">
                        <img src={this.state.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{this.state.title}</h5>
                            <p class="card-text">{this.state.desc}</p>
                           
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default InfoSectioncard;
