import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/style.css'

const NoNote = () => {
  return (
    <div className='bg-secondary wrapper d-flex align-items-center'>
      <div className='container d-flex flex-column align-items-center text-center '>
          <p className='fs-3 text-primary '>
              There is no notes yet.
              Wanna create somes?
          </p>
          <Link to={'/editor'} className='btn btn-primary text-info fw-semibold'>New Note</Link>
      </div>
    </div>
    
  )
}

export default NoNote