import './styles/Portfolio.css'

export const PortfolioFitness = () => {
    return (
            <div class="container" >
                <div class="content" >
                    <a href="https://github.com/TrentonToplikar/fitness-tracker-react" target="_blank">
                    <div class="content-overlay"></div>
                        <img class="content-image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/22i-worked-out-every-day-for-a-month-to-kickstart-my-fitness-routine-and-this-is-what-i-learnt-22-1671720737.jpg" alt="Fitness-Trackr" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title-fitness">Fitness-Trackr</h3>
                            <h2 className="glasses-words-below">Blog</h2>
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
                <h2 className="ddd-glasses">Fitness-Trackr</h2>
                <h2 className="e-commerce">Blog</h2>
            </div>
            </div>
    )
}

export default PortfolioFitness;
