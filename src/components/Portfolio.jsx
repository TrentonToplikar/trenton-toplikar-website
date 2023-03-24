import PortfolioFitness from './PortfolioFitness';
import './styles/Portfolio.css'

export const Portfolio = () => {
    return (
            <div className="section horizontal-rule" id="portfolio">
                <hr className="bottom-of-page4"/>
                <h1 className="portfolio-header">Portfolio</h1>
                <div className="portfolio-images-container">
                    <div class="container" >
                        <div class="content" >
                            <a href="https://restless-sky-6126.fly.dev/" target="_blank">
                            <div class="content-overlay"></div>
                                <img class="content-image" src="https://c.wallhere.com/photos/97/c5/1926x1280_px_beach_sunglasses-513828.jpg!d" alt="3d-Glasses" />
                                <div class="content-details fadeIn-bottom">
                                    <h3 class="content-title">3d-Glasses</h3>
                                    <h2 className="glasses-words-below">E-Commerce</h2>
                                    <ul id="glasses-list">
                                        <li>PostgreSQL</li>
                                        <li>Express</li>
                                        <li>ReactJS</li>
                                        <li>NodeJS</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    <div className="below-portfolio-img">
                        <h2 className="ddd-glasses">3d-Glasses</h2>
                        <h2 className="e-commerce">E-Commerce</h2>
                    </div>
                </div>
                <PortfolioFitness />
                </div>
            </div>
    )
}

export default Portfolio;
