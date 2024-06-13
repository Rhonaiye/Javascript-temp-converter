import { useState, } from "react"


const Contact = ()=>{
    const [input, setInput] = useState()

  

  return(
   <>
   
   <div className="contact-div">
      <form action="https://formspree.io/f/xpzvgpjq" method="POST"
      
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="name"  />

        <label htmlFor="email">Email address</label>
        <input type="name" name="email"  placeholder="Enter your email" />

        <label htmlFor="subject">Subject</label>
        <input className="subject-input" name="subject" type="name" placeholder="Enter the subject"/>

        <label htmlFor="message">Message</label>
        <input  className="message-input" name="message" type="name" placeholder="Leave a message"/>

        <button className="submit-btn">Submit</button>
      </form>

        
   </div>
   
   </>
   
  )
}

export default Contact