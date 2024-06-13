
import React, {useState, useEffect} from "react"
import {auth, database} from "../src/pages/Firebase"
import {doc, getDoc} from "firebase/firestore"
import { Bars } from 'react-loading-icons'
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin"


const Profile = ()=>{
  const [userDetails, setUserDetails] = useState(null)

  const fetchUserData = async ()=>{
    auth.onAuthStateChanged(async(user)=>{
      console.log(user)

      const docRef = doc(database, "users", user.uid);
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        setUserDetails(docSnap.data())
        console.log(docSnap.data())
      }
      else{
        console.log('user not logged in')
      }
    })
  }
  useEffect(()=>{
    fetchUserData()
  }, [])


  async function handleLogout(){
    try{
      await auth.signOut()
      window.location.href="/Login"
    }
    catch(error){
      console.error(error)
    }
  }
   return(
    <div className="user-details">
        {userDetails  ? 
        (<>
        <h3>Welcome {userDetails.username || userDetails.firstname}</h3>
        <div>
          <p>Email: {userDetails.email}</p>
          <p>First name : {userDetails.firstname}</p>
          <p>Last name: {userDetails.lastname}</p>
        </div>

        <button onClick={handleLogout}> Logout</button>
        
        
        
        </>) : <TailSpin className="loader"/>}
    </div>
   )
}


export default Profile