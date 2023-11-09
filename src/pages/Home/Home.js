import HomeIntro from './home-intro/home-intro';
import HomeAbout from './home-about/home-about';
import HomeBest from './home-best/home-best';

const Home = (props) => {
    return (
        <div>
            <HomeIntro/>
            <HomeAbout/>
            <HomeBest data={props.data} onLink={props.onLink}/>
        </div>
    )
}

export default Home;