import {Link} from "react-router-dom"
import { GiHamburgerMenu,  } from "react-icons/gi"
import { ImCross } from "react-icons/im"
import {motion} from "framer-motion"
import { useState } from "react"



const Navbar = ()=>{
 const [isOpen, setIsOpen] = useState(false)
 


  
    
  return(
    <>
      <nav className="Navbar" id="fullNav">
        <p className="top-name" id="top-n"> Rhonaiye Felix</p>
       
        
       <motion.nav initial={{y: - 100}} animate={{y:isOpen? 0 : -100}} transition={{duration:0.6, ease:"easeInOut"}}
       
       className="navs" id="nav">
       <Link id="Links" to="/">
        <h1>Home</h1>
       </Link>

        <Link  id="Links" to="/About">
          <h1>About</h1>
        </Link>
        
         <Link id="Links" to="Projects">
          <h1>Projects</h1>
         </Link>

        <Link id="Links" to="/Contact">
          <h1>Contact</h1>
        </Link>
       </motion.nav>

      
        
        <button className="nav-toggle"  onClick={()=>{
          setIsOpen(!isOpen)
         document.getElementById(`nav`).classList.toggle(`show`)

         document.getElementById("fullNav").classList.toggle(`stretch`)
         document.getElementById(`top-n`).classList.toggle(`remove`)

         
        }}>
           {!isOpen? <GiHamburgerMenu/> : <ImCross></ImCross>}
           </button>

      </nav>
      
      
    </>

    
  )
}

export default Navbar

