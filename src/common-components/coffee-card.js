import './cofee-card.css';
import preview from '../img/show.jpg'
import PageIntro from './page-intro';
import ParagraphTitle from './paragraph-title';
import { Component } from 'react';

class CoffeeCardShow extends Component{
    localCardStorage = () => {
        if (Object.keys(this.props.data).length !== 0) {
            localStorage.setItem('location', this.props.data.location)
            localStorage.setItem('price', this.props.data.price)
        }
    }
   

    render() {
        this.localCardStorage();
        
        return (
            <div>
                <PageIntro title="Our Coffee"/>
                <section className="section-product">
                    <div className="container">
                        <div className="section-product-inner">
                            <div className="section-product-img">
                                <img src={preview} alt="" />
                            </div>
                            <div className="section-product-desc">
                                <ParagraphTitle title="About it"/>
                                <div className="section-product-country"><span>Country:</span> {localStorage.getItem('location')}</div>
                                <div className="section-product-text"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <div className="section-product-price"><span>Price:</span> {localStorage.getItem('price')}$</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default CoffeeCardShow;