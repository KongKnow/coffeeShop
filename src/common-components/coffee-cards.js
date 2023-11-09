import './common-components.css';
import { Link } from 'react-router-dom';


const CoffeeCards = (props) => {
    return (
        <div className="coffee-card">
            <Link to='/card' className="coffee-card-img" onClick={() => props.onLink(props)}>
                <img src={props.image} alt="coffee sort" />
            </Link>
            <Link to="/card" className="coffee-card-title" onClick={() => props.onLink(props)}>{props.name}</Link>
            <div className="coffee-card-location">{props.location}</div>
            <div className="coffee-card-price">{props.price}$</div>
        </div>
        
    )
}

export default CoffeeCards;