import backgroundCoffee from '../img/introbg.png'
import backgroundPleasure from '../img/introbg2.png'

const PageIntro = (props) => {
    const style = {
        backgroundImage: `url(${props.title === 'Our Coffee' ? backgroundCoffee : backgroundPleasure})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        padding: '130px 0 84px',
        textAlign: 'center'
    }

    return (
        <div className="page-intro" style={style}>
            <h1 className="page-title">{props.title}</h1>
        </div>
    )
}

export default PageIntro;