import React, { useEffect, useState } from 'react'
import Home from './Home';
import Preloader from './Preloader'

const DefaultPage = () => {
  let [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout( () => {
      setLoading(!loading)
    },1000)
  },[])

  return (
    <div>{loading ? <Preloader />:<Home />}</div>
  )
}

export default DefaultPage