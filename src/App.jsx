import Navbar from './Navbar'
import './App.css'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'

function App() {
  let component = <Home />
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/projects":
      component = <Projects />
      break
  }
  return (
  <>
    <Navbar />
    {component}
  </>
  )
}

export default App
