import React from 'react'
import './app.scss';
import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Menu from "./components/menu/Menu"
import Timeline from './components/Timeline';
import Contact from "./components/contact/Contact"
import { useState } from "react"
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Timeline/>
      <div className="sections">
        <Intro/>
        <Timeline/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;