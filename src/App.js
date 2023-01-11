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
    if(window.confirm(`Do you really want to delete note with id ${id}`)){
      setNotes(notes.filter(n => n.id !== id))
    }
  }
  return (
  <>
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
}
export default App;
 
 

