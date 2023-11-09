import subtitleImg from '../../../img/subtitlesvg.svg'

import './home-intro.css'

const HomeIntro = () => {
    return (
        <section className="section-intro">
            <div className="container">
                <div className="section-intro-info">
                    <h1 className="section-intro-title">Everything You Love About Coffee</h1>
                    <div className='section-intro-img'>
                        <img src={subtitleImg} alt="coffeeBean" />
                    </div>
                    <h3 className="section-intro-subtitle">We makes every day full of energy and taste</h3>
                    <h3 className="section-intro-subtitle">Want to try our beans?</h3>
                    <a href="#" className="section-intro-btn">More</a>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro;