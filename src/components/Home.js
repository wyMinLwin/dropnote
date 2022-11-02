import React, { useState } from 'react'
import Editor from './Editor'
import NoNote from './NoNote'


const Home = () => {
  const [notes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  )

  return (
    <div>
      {notes.length < 1 ?
      <NoNote  />:
      <Editor />
      }
    </div>
  )
}

export default Home