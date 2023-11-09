import PageIntro from '../../common-components/page-intro';
import About from '../../common-components/about';
import CoffeeStore from '../../common-components/coffee-store';

const Pleasure = (props) => {
    return (
        <div>
           <PageIntro title="For your pleasure"/>
           <About title="About our goods"/>
           <CoffeeStore onLink={props.onLink} data={props.data} />
        </div>
    )
}

export default Pleasure;