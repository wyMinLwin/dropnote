import React from 'react'
import ReactLoading from 'react-loading'
import Logo from '../assets/logoSvg-v2-01.svg'

const Preloader = () => {
  return (
    <div className='wrapper bg-secondary d-flex align-items-center'>
        <div className='container d-flex flex-column align-items-center'>
            <img src={Logo} width={150}/>
            <div className='my-4 fs-4 text-center fw-semibold text-primary'>Don't fall out your ideas to nowhere. Let it drop into yours notes!</div>
            <ReactLoading type={'bars'} color={'#FCA311'} width={60} />    
        </div>
    </div>
  )
}

export default Preloader