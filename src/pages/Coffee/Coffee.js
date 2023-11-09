import PageIntro from '../../common-components/page-intro';
import About from '../../common-components/about'
import CoffeeStore from '../../common-components/coffee-store'

const Coffee = (props) => {
    return (
        <div>
            <PageIntro title="Our Coffee"/>
            <About title="About our beans"/>
            <CoffeeStore onLink={props.onLink} data={props.data} onTerm={props.onTerm} onFilter={props.onFilter}/>
        </div>
    )
}

export default Coffee;