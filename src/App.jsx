import React from "react"
import Navbar from'./component/Navabar/navbar.jsx'
import Intro from './component/intro/intro.jsx'
import About from './component/about/about.jsx'
import Education from './component/Education/education.jsx'
import Servic from './component/Servic/service.jsx'
import Project from './component/project/project.jsx'

function App() {
  return (
      <>
          <Navbar/>
          <div id="intro">
              <Intro />
          </div>
          <div id="about">
              <About />
          </div>
          <div id="education">
            <Education/>
          </div>
          <div id="service">
            <Servic/>
          </div>
          <div id="project">
            <Project/>
          </div>
      </>
  );
}

export default App
