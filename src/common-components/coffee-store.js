import './common-components.css';
import { Component } from 'react';
import CoffeeCards from './coffee-cards';
import StoreNav from './store-nav';
import image from '../img/show.jpg'

class CoffeeStore extends Component{
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }


    onSearch = (e) => {
        this.props.onTerm(e.target.value)
        this.setState(({
            term: e.target.value
        }))
    }
    
    render() {
        const elems = this.props.data.map(item => {
            return (
                <CoffeeCards
                    key={item.id}
                    name={item.name}
                    location={item.location}
                    price={item.price}
                    onLink={this.props.onLink}
                    image={image}
                />
            )
        })

        return (
            <div className="section-store">
                <div className="container">
                    {this.props.onTerm && this.props.onFilter ? <StoreNav onTerm={this.props.onTerm} onFilter={this.props.onFilter}/> : <></>}
                    <div className="section-store-goods">
                        {elems}
                    </div>
                </div>
            </div>
        )
    }
}

export default CoffeeStore;