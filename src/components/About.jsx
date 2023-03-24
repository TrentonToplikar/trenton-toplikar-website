import './styles/About.css'
import Skills from './Skills'

export const About = () => {
    return (
        <div className="section horizontal-rule">
                <h1 className="about-me-header">About Me</h1>
            <div className="about-container" id="about">
                <div className="child-about-background">
                <img src="https://i.ytimg.com/vi/vByd9msoSnA/maxresdefault.jpg" alt="Trenton Toplikar"  className="me" />
                <div className="background-color"></div>
                </div>
                <div className="bio-container">
                    <p className="i-am">Before starting my career as a software developer, I played professional baseball for the <span className="SFG">San Francisco Giants</span>.</p>
                    <p className="my-bio">Competing in high stress environments showed me the value of being a good teammate.</p>
                    <ul>
                        <li className="bio-li">Be the hardest worker so you are reliable.</li>
                        <li className="bio-li">Be eager to learn so you can quickly adapt.</li>
                        <li className="bio-li">Have humility and hold yourself accountable.</li>
                        <li className="bio-li">Have awareness and be open to self improvement.</li>
                        <li className="bio-li">Empathy and listening are as important as responding.</li>
                    </ul>
                </div>
            </div>
            <hr className="bottom-of-page2" />
        </div>
    )
}

export default About