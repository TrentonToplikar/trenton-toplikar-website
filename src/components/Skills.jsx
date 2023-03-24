import './styles/Skills.css'
import skills from '../assets/TechnialSkillsExperience.png'


export const Skills = () => {
    return (
        <div className="section skills-container" id="skills-href">
            <img id="skills" src={skills} alt="skills" />
            {/* <hr className="bottom-of-page3"/> */}
        </div>
    )
}

export default Skills;