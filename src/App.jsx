import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Socials from './components/Socials'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Mouselight from './components/Mouselight'


function App() {

  return (
    <div className="App">
      <Navbar  />
      <Socials />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <Mouselight /> 
     </div>
  )
}

export default App
