import { Link } from "react-router-dom"
import {motion} from "framer-motion"

const Home = ()=>{


  return(

   <>
   
   <div className="center-div">

<motion.div initial={{opacity:0,x:-100}} animate={{opacity:10,x:0}} transition={{duration:1.5}} className="name-info">

    <h1 className="name">Rhonaiye Felix</h1>
    <p className="home-p">I'm a <span className="career">Software developer</span>, i find pleasure in bringing websites and web applications to life by creating engaging user interfaces and experience. Sometimes i may call myself an artist</p>

        <div className="btn-div">
            <div>
            <Link to="/About">
              <button className="about-btn">About me →</button>
            </Link>
        
              
            </div>
        </div>
   </motion.div>

   </div>



</>

  )
}

export default Home