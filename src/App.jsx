import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './sections/home/home'
import Skills from './sections/skills/skills'
import Socials from './sections/socials/socials'
import Projects from './sections/projects/projects'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/*Home*/}
          <Route path= "/" element= {
            <>
              <Navbar />
              <Home />
              <Projects />
              <Skills />
              <Socials />
            </>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
