import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, Link, useLocation} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from "./Navbar.jsx"
import Projects from './pages/Projects.jsx'
import LandingPage from './pages/Landing-page.jsx'
import Quote from './pages/Quote.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import RockPaperGame from './pages/RockPaperGame.jsx'
import { Task } from './pages/Task.jsx'
import Register from './pages/Register.jsx'
import AboutLog from './AboutLog.jsx'
import Profile from './profile.jsx'

import {AnimatePresence} from "framer-motion"
import Login from './pages/Login.jsx'


function App() {

  const [count, setCount] = useState(0)
  

  return (
    <>
    
   
    <Router>
     <Navbar></Navbar>
    
        <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='Projects/Landing-page' element={<LandingPage/>}/>
            <Route path='Projects/Quote' element={<Quote/>}/>
            <Route path='/Projects/Task' element={<Task></Task>}/>
            <Route path='/Rock-paper-scissors' element={<RockPaperGame/>}/> 
            <Route path='/Sign-Up' element={<Register/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='AboutLog' element={<AboutLog/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='*'  element={<ErrorPage/>}/>
        </Routes>
        
    </Router>
   

    
    
    
    </>
  )
}

export default App
