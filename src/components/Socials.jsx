import './styles/Socials.css'

export const Socials = () => {
    return (
      <aside className="socials-container">
        <div className="social-words">
            <a href="https://www.linkedin.com/in/trenton-toplikar/" target="_blank">
            <img className="social1" src="https://cdn1.iconfinder.com/data/icons/social-network-15/512/linkedin-1024.png" alt="Linked In" />
            </a>
        </div>
        <div className="social-words">
            <a href="https://github.com/TrentonToplikar" target="_blank">
            <img className="social1"  src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/github-512.png" alt="Github" />
            </a>
        </div>
        <div className="social-words">
            <a href="https://www.google.com/maps/place/San+Diego,+CA/" target="_blank">
            <img className="social1" src="https://cdn2.iconfinder.com/data/icons/social-networks-7/128/Socialmedia_icons_Navigation-128.png" alt="Location"/>
            </a>
        </div>
        <div className="social-words">
            <a href="#contact-form">
            <img className="social1" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-512.png" alt='Email'/>
            </a>
        </div>
      </aside>
    )
  }
  export default Socials;