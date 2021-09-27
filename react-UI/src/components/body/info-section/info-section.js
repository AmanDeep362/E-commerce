import React from 'react'
import InfoSectioncard from './info-section-card';
import infoSectionData from './info-section-data.json'
import './info-section.css'
import img1 from '../../../images/shipping.jpg'
import img2 from '../../../images/refund.jpg'
import img3 from '../../../images/support.jpg'
class InfoSection extends React.Component {
    state = {
        infoData: infoSectionData,
        title : "hello",
        img1 :  img1,
        img2 : img2,
        img3 : img3
    }
    render() {
        
        return (
            <>
                 <div className="info-section-container">
                    <InfoSectioncard img={this.state.img1} title={this.state.infoData[0].title } desc={this.state.infoData[0].desc}/>
                    <InfoSectioncard img={this.state.img2} title={this.state.infoData[1].title } desc={this.state.infoData[0].desc}/>
                    <InfoSectioncard img={this.state.img3} title={this.state.infoData[2].title } desc={this.state.infoData[0].desc}/>
                 </div>
            </>
        );
    }
}
export default InfoSection;
