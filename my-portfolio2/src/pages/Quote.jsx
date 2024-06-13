import  {useState, useEffect} from "react"


const Quote = ()=>{
const [news, setNews] = useState("")



 useEffect(()=>{
  ()=>Getnews()
 },[])

 async function Getnews(){
  try{
  
  const response = await  fetch('https://dummyjson.com/quotes/random')
 

   if(response.ok){
    const data = await response.json()
    

    
    console.log(data)
    
    
    document.getElementById(`title`).textContent = data.quote
    document.getElementById(`content`).textContent = data.author
   
   }
   else{
    throw new Error(`could not fetch`)
   }
  }
  
  catch(error){
    console.error(error)
  }



 }

  return(
    <div className="news-api-container">

         <div className="news-api">
             <p style={{color:'#568cdde9'}}>Random Qoute</p>
            
             <h1 id="title"></h1>
              <p id="content"></p>
             <p style={{fontWeight:"bolder" }} id="author"></p>
             <p id=""></p>
             
             <button className="get-news" onClick={()=>Getnews()}>Get Quote</button>

         </div>
    </div>
  )
}

export default Quote