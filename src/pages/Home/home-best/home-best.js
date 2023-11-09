import './home-best.css';
import CoffeeCardsBest from '../../../common-components/coffee-cards-best';
import image from '../../../img/show.jpg'

const HomeBest = (props) => {
    const sellsArray = props.data.map(item => item.sells);

    const sellsBest = [];
    for (let i = 0; i < 3; i++) {
        sellsBest.push(Math.max.apply(null, sellsArray));
        let index = sellsArray.indexOf(Math.max.apply(null, sellsArray));
        sellsArray.splice(index, 1);
    }

    let itemsDb = [];
    props.data.forEach(item => {
        for(let i = 0; i < sellsBest.length; i++) {
            if(sellsBest[i] === item.sells) {
                itemsDb.push(item);
            }
        }
    })
    
    const items = itemsDb.map(item => {
            
                return (<CoffeeCardsBest
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    location={item.location}
                    onLink={props.onLink}
                    image={image}
                />)
            
        });

    return (
        <section className="section-best">
            <div className="container">
                <h4 className="section-best-title">Our best</h4>
                <div className="section-best-cards">
                    {items}
                </div>
            </div>
        </section>
    )
}

export default HomeBest;