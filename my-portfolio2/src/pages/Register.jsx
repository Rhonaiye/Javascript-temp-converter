import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import {Link} from "react-router-dom"
import { auth , database} from "./Firebase.jsx"
import { setDoc, doc } from "firebase/firestore"




const Register = ()=>{
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [Fname, setFname] = useState("")
const [Lname, setLname] = useState("")


const handleRegister = async (e)=>{
  e.preventDefault()
  try{
  await  createUserWithEmailAndPassword(auth, email, password);
  const user = auth.currentUser
  
  if(user){
   await setDoc(doc(database, "users", user.uid), {
    email: user.email,
    firstname : Fname,
    lastname : Lname,
   })
  }
  
  
  window.alert(`Account created successfully`)
  setEmail("")
  setFname("")
  setLname("")
  setPassword("")


  }
  catch(error){
    console.error(error)
    window.alert(error.message)
  }
}


  return(
    <div className="Register-body-container">
          
         <div className="Register-body">
            
            <h1>Sign up</h1>
             <form onSubmit={()=>handleRegister}>

             <input type="text" name="First-name" placeholder="First name"  onChange={(event)=>{
              setFname(event.target.value)
             }} />

             <input type="text" name="Last-name" placeholder="Last name" onChange={(event)=>{
              setLname(event.target.value)
             }}/>

             <input type="text" name="email" placeholder="Email" onChange={(event)=>{
              setEmail( event.target.value)
             }}/>

             <input type="password" name="" placeholder="Password" onChange={(event)=>{
             setPassword( event.target.value)
             }} />
             <button className="register-btn">Sign-Up</button>

             </form>
             <p>Already have an account? <Link to="/Login">click here</Link></p>
         </div>
    </div>
  )
}

export default Register