import React, { useState,useEffect } from 'react'
import Sidebar from './Sidebar'
import TextPad from './TextPad'
import { nanoid } from 'nanoid'

const Editor = () => {
  

  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  )
  
  const [currentNote,setCurrentNote] = useState(notes[0] || [])
  let changeCurrentNote = (note) => {
    setCurrentNote(note);
  }
  
  let updateNote = (title,body) => {
    setNotes(prevNotes => {
      let noteArr = [];
      for (let i =0; i < prevNotes.length; i++){
        const prevNote = prevNotes[i];
        if (prevNote.id === currentNote.id){
          noteArr.unshift({...prevNote,title:title,body:body})
        } else {
          noteArr.push(prevNote)
        }
      }
      return noteArr
    })
  }

  let deleteNote = (id) => {
    setNotes( prevNotes => prevNotes.filter( prevNote => prevNote.id !== id))
  }


  useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])

  let createNewNote = () => {
    const newNote = {
      id: nanoid(),
      title:`Note ${notes.length+1}`,
      body: "",
    }
    setNotes( prevNotes => [newNote,...prevNotes])
    setCurrentNote(newNote)
    
  }
  
  const [showSidebar,setShowSidebar] = useState(true);
  let showHideClasses = 'd-none d-md-block';
  let handleClick = () => {
    setShowSidebar(prevShowSidebar => !prevShowSidebar);
  }

  return (
    <div className='wrapper row g-0'>
     
        <nav className={`${showSidebar ? '' : showHideClasses} col-12 col-md-2 bg-secondary pe-md-2`}>
            <Sidebar changeCurrentNote={changeCurrentNote} handleClick={handleClick} notes={notes} createNewNote={createNewNote} currentNote={currentNote}/>
        </nav>
        <main className={`${!showSidebar ? '' : showHideClasses} col-12 col-md-10 bg-secondary` }>
            <TextPad deleteNote={deleteNote} changeCurrentNote={changeCurrentNote} handleClick={handleClick} notes={notes} currentNote={currentNote} updateNote={updateNote}/>
        </main>
    </div>
  )
}

export default Editor