import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import DisplayPicture from './components/DisplayPicture'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
     <Header />
     <main>
        <DisplayPicture />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
     </main>
     <Footer />
    </>
  )
}

export default App
