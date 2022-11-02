import React, { useEffect, useState } from 'react'
import Logo from '../assets/logoSvg-v2-01.svg'

const TextPad = ({handleClick,currentNote,updateNote,changeCurrentNote,deleteNote}) => {

    
    const [currentTitle,setCurrentTitle] = useState("");
    const [currentBody,setCurrentBody] = useState("");
    const [copied,setCopied] = useState(false);
    const [fontsize,setFontsize] = useState(16);


    useEffect(() => {
        setCurrentTitle(currentNote.title || '')
        setCurrentBody(currentNote.body || '')
        
    },[currentNote])

    let copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        .then(setCopied(prevCopied => !prevCopied))
        .then(setTimeout(() => {
            setCopied(prevCopied => !prevCopied)
        },1000))
    }
   
  return (
    <div className='col h-100'>

        <nav className='d-md-none navbar border border-0 border-bottom border-info' id='navForMobile'>
            
            <button className='btn btn-info py-1 mx-3 fw-semibold' onTouchEnd={() => handleClick()}><i className="fa-solid fa-xmark"></i></button>
            <div className='d-flex justify-content-center  align-items-center text-primary' id='logoForNavEditor'>
                <img src={Logo} height={45} className={'text-center align-items-center justify-content-center'} />
				<h1 className='h5 text-primary' >DropNote</h1>
            </div>
            <button className='btn btn-primary py-1 mx-3 fw-semibold' onTouchStart={() => updateNote(currentTitle,currentBody)} onTouchEnd={() => handleClick()}><i className="fa-solid fa-check"></i></button>
            
        </nav>

        <nav className='d-none d-md-flex navbar navbar-expand bg-secondary text-info border border-0 border-bottom border-info'>
            <div className="flex-fill"></div>
            <ul className='navbar-nav mel-lg-5'>
                
                <div className='me-4 d-flex align-items-center justify-content-center'>
                    <input className='me-2 ' id='fontsizeSlider' type={'range'} min={8} max={64} value={fontsize} onChange={(e)=>setFontsize(e.target.value)}/>
                    <button onClick={() => copyToClipboard(currentBody)} className='btn btn-outline-info py-1 me-2 fw-semibold'>Copy</button>
                    <button onMouseDown={() => deleteNote(currentNote.id)} onMouseUp={() => changeCurrentNote({title:'',body:''})} className='btn btn-outline-info py-1 me-2 fw-semibold'>Delete</button>
                    <button onClick={() => changeCurrentNote({title:'',body:''})} className='btn btn-info py-1 me-2 fw-semibold'>Cancel</button>
                    <button onClick={() => updateNote(currentTitle,currentBody)} className='btn btn-primary py-1 me-2 fw-semibold'>Save</button>
                </div>
                
            </ul>
        </nav>
        <div className='container-fluid py-3 h-75'>
            <form className='h-100'>
                <input value={currentTitle} type={'text'} onChange={(e)=>{setCurrentTitle(e.target.value)}} className='fs-3 form-control bg-secondary border border-0 border-bottom border-info rounded-0' placeholder='Add Title' />
                <div className={`w-100 text-muted mt-3 align-items-center ${ !copied ? ' d-none' :' d-block'}`}>Copied to clipboard!</div>
                <textarea style={{'fontSize': fontsize+'px'}} value={currentBody} onChange={(e)=>setCurrentBody(e.target.value)} className='p-3 mt-3 bg-secondary w-100 h-75' placeholder='Note Here...' ></textarea>
            </form>
        </div>
        <footer className='fixed-bottom d-md-none mb-2'>
            <div className='d-flex align-items-center justify-content-center py-1'>
                <input className='me-2' id='fontsizeSlider' type={'range'} min={8} max={64} value={fontsize} onChange={(e)=>setFontsize(e.target.value)}/>
                <button onTouchEnd={() => copyToClipboard(currentBody)} className='btn btn-outline-info py-1 me-2'>
                    <i className="fa-solid fa-copy"></i>
                </button>
                <button onTouchStart={() => deleteNote(currentNote.id)} onTouchEnd={() => handleClick()} className='btn btn-outline-info py-1 me-2'>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div> 
        </footer>
    </div>
  )
}

export default TextPad