import { Link } from "react-router-dom"
import {motion} from "framer-motion"


const Projects = ()=>{



  return(
    <>
   <motion.div initial={{opacity:0,x:100}} animate={{opacity:10,x:0}} transition={{duration:1.5}}>

         <h1 className="projectsH1">Projects:</h1>
        <div className="projects-container">

       
            

             <div className=" Quote-page-ref">
                 <h1>Quote Api</h1>
                 <p>Using my Knowledge in <span className="js">Javascript</span>, i was able to create this simple Quote Api</p>

                 <Link to="/Projects/Quote">
                     <button className="news-page-button">Check it out</button>
                </Link>
             </div>

             <div className="Rpg-page-ref">
               <h1>Rock-paper-Scissors game</h1>
               <p>Created this simple game with <span>HTML,CSS and Javascript</span>, most of the work came from Javascript</p>
              
              <Link to='/Rock-paper-scissors'>
              <button className="Rock-scissors-game">Check it out</button>
              </Link>
             </div>

             <div className="recipe-page-ref">
              <h1>Login & Sign-up authentication</h1>
              <p>Implemented this simple user authentication with firebase</p>
               <Link to="/Sign-up">
               <button className="authenc-btn">Check it out</button>
               </Link>
             </div>

             <div className="task-page-ref">
              <h1>Task-application</h1>
              <p>With my understanding in React.js, i simply made this task application</p>
                 

                 <Link to="/Projects/Task">
                   <button className="task-btn">Check it out</button>
                 </Link>
             </div>

          

             <div className="contact-me2-div">
              <Link to="/Contact">
              <button className="contact-me2" >Contact-me →</button>
              </Link>
             </div>
    
          </div>
      </motion.div>
    
    </>
  )
}

export default Projects