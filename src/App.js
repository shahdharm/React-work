// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
 
// Firts we need to import Feedback
// import Feedback from './components/Feedback'
 
function App(props) {
  // const {notes} = props.notes
  const [newNote, setNewNote] = useState('Enter your name')
  const [notes, setNotes ] = useState(props.notes)
  const [ShowAll, setShowAll] = useState(true)

  const notesToShow = ShowAll
  ? notes
  : notes.filter(n => n.important === true)


    const handleInputChange = (event) =>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const handleAdd = (event) =>{
    event.preventDefault()
    // alert('Testing')
    const note ={
      id: notes.length + 1,
      content: newNote,
      date: new Date().toString(),
      impotant: Math.random() <0.5
    }
    if(newNote !== '')setNotes(notes.concat(note))
    setNewNote('')
  }
  const handleDelete = (id) =>{
    window.confirm(`Do you really want to delete note with id ${id}`)
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
    <button onClick={() => setShowAll(!ShowAll)}>
      {ShowAll ? 'show important': 'show all'}
       
    </button>
    <ul>
      {notesToShow.map(notes =>
        < li key = {notes.id}><p>{notes.content}</p>
        <p>{notes.date}</p>
        <button onClick={() => handleDelete(notes.id)}>delete</button>
        </li>)}
        
    </ul>
    <form>
      <input value = {newNote} onChange ={handleInputChange}/>
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
 
 

