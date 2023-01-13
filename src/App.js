// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
// Firts we need to import Feedback
// import Feedback from './components/Feedback'
 
function App(props) {
  // const {notes} = props.notes
  const [newNote, setNewNote] = useState('Enter your name')
  const [notes, setNotes ] = useState([])
  const [ShowAll, setShowAll] = useState(true)

  useEffect(() =>{
    axios.get('http://localhost:3001/notes')
    .then(response =>{
      console.log(response)
      setNotes(response.data)
    })
    .catch(err => console.log(err))
  },[])

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
      // id: notes.length + 1,
      content: newNote,
      date: new Date().toString(),
      impotant: Math.random() <0.5
    }

    axios.post('http://localhost:3001/notes', note)
    .then(response =>{
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')

    })
    .catch(err => console.log(err))

    if(newNote !== '')setNotes(notes.concat(note))
    setNewNote('')
  }
  const handleDelete = (id) =>{
    if(window.confirm(`Do you really want to delete note with id ${id}`)){
      axios.delete(`http://localhost:3001/notes/ ${id}`)
      .then(response =>{
        console.log(response)
      
        setNotes(notes.filter(n => n.id !==id))
      })
      .catch(err => console.log(err))
     
       
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
 
 

