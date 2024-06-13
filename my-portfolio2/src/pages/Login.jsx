import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"
import { auth, } from "./Firebase"




const Login = ()=>{
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = async (event)=>{
  event.preventDefault();
  try{
     await signInWithEmailAndPassword(auth, email, password )
     window.location.href="/Profile"
     setEmail("")
     setPassword("")
  }

  catch(error){
    console.error(error)
  }
}

  return(


    <div className="login-body-container">
        <div className="login-body">

          <h1 style={{marginTop: "0px"}}>Login</h1>
          <form onSubmit={handleSubmit}>

            <input type="text" name="email" placeholder="Email" onChange={(event)=>{
              setEmail(event.target.value)
            }}/>


            <input type="password" name="password" placeholder="Password" onChange={(event)=>{
              setPassword(event.target.value)
            }}/>


            <button>Submit</button>
          </form>
            <p style={{marginBottom:"0px"}}>Don't have an account? <Link to="/Sign-Up">click here</Link></p>
        </div>
    </div>
  )
}


export default Login