import { useState } from "react"
import Statistics from "./Statistics"

 
 
 
const Feedback = ()=>{
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
 
 
    const handlegood = ()=>{
        setGood(good+1)
      }
    const handlebad = ()=>{
        setBad(bad+1)
      }
    const handleneutral = ()=>{
        setNeutral(neutral+1)
      }
    //   const all = ()=> good +neutral + bad
    //   const average = ()=>(good-bad)/all()
    //   const positive =()=> (good/all()*100)
   
    return(
    <>
 
    <h2>Give Feedback</h2>
    <button  onClick={handlegood}>good</button>
   
    <button  onClick={handleneutral}>neutral</button>
 
    <button  onClick={handlebad}>bad</button>
 
    <Statistics good = {good} neutral = {neutral} bad = {bad}/>
 
 
 
   
   
 
    </>
   
    )
}
export default Feedback
 

