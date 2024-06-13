import cssiImage from '../assets/css2.jpeg'
import htmlImage from '../assets/html.png'
import reactImage from '../assets/react.svg'
import jsImage from '../assets/js.png'
import firebaseImg from '../assets/fire2.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Projects from './Projects'
const About = ()=>{
 const  aboutres = ()=>{
  const isDesktopOrLaptop = useMediaQuery({query:'()'})
 }




 return(

  <>
  
  <div className="about1">


  <div className='lang-body'>
    <h1 className="languages">Skills:</h1>

    <motion.div initial={{opacity:0,x:-100}} animate={{opacity:10,x:0}} transition={{duration:1.5}} 
           className="languages-container">


           <div className="html">
            <img src={htmlImage} alt=""  />
             <p>Depth Knowledge in <span className='html-text'>HTML</span>, to develop structured, semantic and accesible pages with HTML5 elements</p>
           </div>

            <div className="css">
            <img src={cssiImage} alt="" />
            <p>Good understanding in box models, <span>CSS</span> selectors, layout techniques and responsive design principles. Also good at creating cool and special effects like animation</p>
              
            </div>

            <div className="javascript">
              <img src={jsImage} alt="" />
              <p>Proficient in <span className='js'>Javascript</span>, to build intercative and dynamic which enhances user experience using Es6 features and libaries. Also skilled at handling data </p>
            </div>

            <div className="react">
              <img src={reactImage} alt="" />
              <p>Proficient in <span>React</span>, to build dynamic and intercative web applications efficiently to make swift web applications. Have any doubt?, this portfolio was made with react</p>

            </div>
            
            <div className="react">
              <img  src={firebaseImg} alt="" />
              <p>Firebase</p>
              <p>Depth knowledge in real time database handling, storage and hosting to build powerful scalable web and mobile applications using <span className='firebase-text'>Firebase</span> services effectively.</p>
            </div>

            <div className='technical-skills'>
              <h1 style={{textAlign:"center"}}>Technical skills</h1>
             <ul>
              <p>1. Good problem solving skills</p>
              <p>2. Proeficient in Error handling</p>
              <p>3. Fast and Reliable in Huge projects</p>
              <p>4. Team worker</p>
              <p>5. Fast learner</p>
             </ul>
            </div>

            <Link to="/Projects">
            <button className='projects-link-button'>Check out my projects →</button>
            </Link>
      </motion.div>
     
  </div>

  </div>



 
  
  
  </>


 )
} 

export default About