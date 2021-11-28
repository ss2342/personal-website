import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Workexp from "./components/work-exp/Workexp"
import Education from "./components/education/Education"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="app">
      <Navbar/>
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
