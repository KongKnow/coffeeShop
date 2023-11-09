import './common-components.css'
import ParagraphSubtitleImg from '../img/paragraphsubtitlesvg.svg'

const ParagraphTitle = (props) => {
    return (
        <div>
            <h3 className="paragraph-title">{props.title}</h3>
            <div className="paragraph-img">
                <img src={ParagraphSubtitleImg} alt="" />
            </div>
        </div>
    )
}

export default ParagraphTitle;