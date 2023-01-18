import { useState, useEffect } from "react";
import axios from 'axios'
import Note from "./components/Notes";
import noteServices from "./services/noteService";
import noteService from "./services/noteService";

function App() {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const getNotes = () => {
     noteServices.getAllNotes()
      .then(response => {
        console.log(response.data)
        setNotes(response.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(getNotes, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(n => n.important === true)

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const note = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    if (newNote !== '') {
       noteService.createNote(note)
        .then(response => {
          setNotes(notes.concat(response.data))
          setNewNote('')
        })
        .catch(err => console.log(err))
    }
  }

  const handleDelete = (id) => {
    alert(id)
    noteService.deleteNote(id)
      .then(response => {
        setNotes(notes.filter(n => n.id !== id))
      }).catch(err => console.log(err))
  }

  const handleImportance = (id) => {
    alert(id)
    let targetNote = notes.find(n => n.id === id)
    console.log(targetNote)
    targetNote = {...targetNote, important: !targetNote.important}
    console.log(targetNote)

    noteService.updateNote(id, targetNote)
    .then(response =>{
      console.log(response.data)
      setNotes(notes.map(n => n.id === id ? response.data: n))
    }).catch(err => console.log(err))
    //? find the note with id
    // update the note and change importance
    // put request to the server with the updated note
    // update state with the updated notes
  }

  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id}
            note={note}
            handleDelete={() => handleDelete(note.id)}
            handleImportance={() => handleImportance(note.id)}
          />
        )}
      </ul>

      <form>
        <input value={newNote} onChange={handleInputChange} />
        <button onClick={handleAdd}>add</button>
      </form>
    </>
  );
}

export default App;

// // import logo from './logo.svg';
// import './App.css';
// import { UseEffect, useState } from 'react';
// import axios from 'axios';
// import Note from "../src/components/Notes"
// // Firts we need to import Feedback
// // import Feedback from './components/Feedback'
 
// function App(props) {
//   // const {notes} = props.notes
//   const [newNote, setNewNote] = useState('Enter your name')
//   const [notes, setNotes ] = useState([])
//   const [ShowAll, setShowAll] = useState(true)


//   const getNotes = () =>{
//     () =>{
//     axios.get('http://localhost:3001/notes')
//     .then(response =>{
//       console.log(response)
//       setNotes(response.data)
//     })
//     .catch(err => console.log(err))
//   },
//   // const getNotes = async () =>{
//   //   try{
//   //   let response = await axios.get('http://localhost:3001/notes')
//   //   console.log(response.data)
//   //   setNotes(response.data)
//   // } catch (err){
//   //   console.log(err)
  
//   // }
//   UseEffect( getNotes,[])

//   // useEffect(() =>{
//   //   axios.get('http://localhost:3001/notes')
//   //   .then(response =>{
//   //     console.log(response)
//   //     setNotes(response.data)
//   //   })
//   //   .catch(err => console.log(err))
//   // },[])

//   const notesToShow = ShowAll
//   ? notes
//   : notes.filter(n => n.important === true)


//     const handleInputChange = (event) =>{
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }
//   const handleAdd = (event) =>{
//     event.preventDefault()
//     // alert('Testing')
//     const note ={
//       // id: notes.length + 1,
//       content: newNote,
//       date: new Date().toString(),
//       impotant: Math.random() <0.5
//     }

//     axios.post('http://localhost:3001/notes', note)
//     .then(response =>{
//       console.log(response)
//       setNotes(notes.concat(response.data))
//       setNewNote('')

//     })
//     .catch(err => console.log(err))

//     if(newNote !== '')setNotes(notes.concat(note))
//     setNewNote('')
//   }
//   const handleDelete = (id) =>{
//     if(window.confirm(`Do you really want to delete note with id ${id}`)){
//       axios.delete(`http://localhost:3001/notes/ ${id}`)
//       .then(response =>{
//         console.log(response)
      
//         setNotes(notes.filter(n => n.id !==id))
//       })
//       .catch(err => console.log(err))

//       const handleImportance = (id) =>{
//         alert(id)
        
//       }
     
       
//     }
//   }
//   return (
//   <>
//     <h2>Notes</h2>
//     <button onClick={() => setShowAll(!ShowAll)}>
//       {ShowAll ? 'show important': 'show all'}
       
//     </button>

    
//     <ul>
//       {notesToShow.map(note =>
//       <Note key={note.id }
//       note={note}
//       handleDelete={() => handleDelete(note.id)}
//       handleImportance={()=> handleImportance(note.id)}/>
//       )}
//          {/* < li key = {notes.id}>
//           <p>{notes.content}</p>
          
//         <Note note={note}/>
//         <p>{notes.date}</p>
//          <button onClick={() => handleDelete(notes.id)}>delete</button>
//          </li>  */}
        
//     </ul>
//     <form>
//       <input value = {newNote} onChange ={handleInputChange}/>
//       <button onClick={handleAdd}>add</button>
//     </form>
//   </>  
//   )
// }
// }
// export default App;

