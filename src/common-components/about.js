import './common-components.css';
import ParagraphTitle from './paragraph-title'
import sectionImg from '../img/girl.jpg'

const About = (props) => {
    return (
        <div className="section-about-beans">
            <div className="container">
                <div className="section-about-beans-content">
                    <div className="section-about-beans-img">
                        <img src={sectionImg} alt="" />
                    </div>
                    <div className="section-about-beans-desc">
                        <ParagraphTitle title={props.title}/>
                        <p className="section-about-beans-text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p className="section-about-beans-text">Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;