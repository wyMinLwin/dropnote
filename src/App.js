import React from 'react'
import Home from './components/Home';
import Fail from './components/Fail'
import {  Routes, Route } from "react-router-dom";
import DefaultPage from './components/DefaultPage';
import Editor from './components/Editor';
import NoNote from './components/NoNote';

const App = () => {


  return (
    <>
    
    <Routes>
      <Route path='/'>
        <Route index element={<DefaultPage />} />
          <Route path='home' element={<Home />} />
          <Route path='no-note' element={<NoNote />} />
          <Route path="editor" element={<Editor />} />
          <Route path="*" element={<Fail />} />
      </Route>     
    </Routes>
    
    </>
  )
}

export default App