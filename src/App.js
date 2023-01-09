// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
 
// Firts we need to import Feedback
// import Feedback from './components/Feedback'
 
function App() {
  // const {notes} = props.notes
  const [newnote, setNewNote] = useState('add a note here')
  const [notes, setNotes] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:3001/notes')
    .then((response) =>{
      console.log(response)
      setNotes(response.data)
    })

  },[])

    const handleInputChange = (event) =>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const handleAdd = (event) =>{
    event.preventDefault()
    alert('Testing')
  }
 
  // const [counter, setCounter] = useState(0)
  // // setTimeout(()=> setCounter(counter +1),100)
 
  // console.log('Rendering ${counter}...')
 
  // const handlePress = ()=>{
  //   setCounter(counter+1)
  // }
  return (
  <>
     {/* <h2>Hello reactjs</h2>
     <h2>{counter}</h2>
     <button
     onClick={()=> setCounter(counter+100000)}
     >Press</button>
     <Feedback/> */}
 
    <h2>Notes</h2>
    <ul>
      {notes.map(notes =>
        < li key = {notes.id}>{notes.content}
        </li>)}
        
    </ul>
    <form>
      <input value = {newnote} onChange ={handleInputChange}/>
      <button onClick={handleAdd}>add</button>
    </form>

 
 
  </>  
  )
 
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
 
 
}
export default App;
 
 

