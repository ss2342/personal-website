import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Workexp from "./components/work-exp/Workexp"
import Education from "./components/education/Education"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Workexp/>
        <Education/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
