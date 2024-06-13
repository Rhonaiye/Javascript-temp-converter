import { useState } from "react"




const RockPaperGame = ()=>{
  const [score, setScore] = useState(0)

   
  
   const handleChoice = (playerChoice)=>{
    const choices = [`rock`, `paper`, `scissors`]
    const computerChoices = choices[Math.floor(Math.random() * 3)]
    let result = "" ;
    
    console.log(computerChoices)
    

    switch(playerChoice){
      case `rock` :
      result = (computerChoices === `paper`) ? `YOU LOSE` : `YOU WIN`
      break;

      case `paper` :
      result = (computerChoices === `scissors`) ? `YOU LOSE` : `YOU WIN`
      break;

      case `scissors` :
        result = (computerChoices === `rock`) ? `YOU LOSE` : `YOU WIN`
        break;
    }
    if(playerChoice === computerChoices){
      result = `ITS A TIE`
    }

    if(result === `YOU WIN`){
      setScore( s=> s + 1)
     }
     else if(result === `YOU LOSE`){
      setScore(s => s - 1)
     }
    document.getElementById(`playersChoice`).textContent = `You played ${playerChoice}, Computer played ${computerChoices}, you ${result}`
   }
   


  return(
   <div className="Rpg-container">
          

       <div className="Rpg-body">
        <p id="playersChoice"></p>
           <p>Score:{score}</p>
           
          

            <div className="Rpg btn">
             <button onClick={()=>handleChoice(`rock`)}>Rock</button> 
             <button onClick={()=>handleChoice(`paper`)}>Paper</button>
             <button onClick={()=>handleChoice(`scissors`)}>Scissors</button>
            </div>
       </div>
   </div>
  )
}

export default RockPaperGame