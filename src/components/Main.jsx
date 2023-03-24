import './styles/Main.css'
import DownArrow from './DownArrow';

export const Main = () => {
    return (
        <div className="horizontal-rule">
            <div className="section main-container" id="main">
                <div className="title">Trenton Toplikar</div>
                    <div class="fade-container">
                    <p class="word w1">WEB DEVELOPER</p>
                    <p class="word w2">WEB DESIGNER</p>
                    <p class="word w3">FRONT-END DEVELOPER</p>
                    <p class="word w4">BACK-END DEVELOPER</p>             
                    <p class="word w5">FULL STACK SOFTWARE ENGINEER</p>
                </div>
                <p className="bio">Highly skilled problem solver channeling 5 years of experience as a professional baseball player to drive my passion as a software developer.</p>
                <div className="contact-parent">
                        <a href="https://drive.google.com/file/d/1PRqTg0M740EhS0uuiHfMjpddWHdfa_pK/view?usp=sharing" target="_blank">
                    <button className="resume">
                            <p id="resume">Resume</p>
                            <img className="resume-img" src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK-12-512.png" alt="resume" />
                    </button>
                        </a>
                        <a href="#contact-form">
                    <button className="phone">
                            <p id="phone">Contact</p> 
                            <img className="resume-img" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-512.png" alt='Email'/>
                    </button>
                        </a>
                    </div>
            </div>
            <hr className="bottom-of-page1"/>
            <DownArrow />
        </div>
    )
}

export default Main;