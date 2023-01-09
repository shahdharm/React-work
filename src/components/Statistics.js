const Statistics = (props)=>{
    const {good, neutral,bad}= props
 
    const all = ()=> good +neutral + bad
    const average = ()=>(good-bad)/all()
    const positive =()=> (good/all()*100)
    return(
        <>
        <h2>STATISTICS</h2>
    <p>Good {good}  </p>  
    <p>Neutral {neutral} </p>
    <p>Bad {bad}</p>
    <p>all {all()}</p>
    <p>average{average()}</p>
    <p>positive{positive()}%</p>
 
        </>
    )
 
}
export  default Statistics
 

