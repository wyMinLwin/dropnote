import React from 'react'
import Logo from '../assets/logoSvg-v2-01.svg'


const Sidebar = ({handleClick,notes,createNewNote,currentNote,changeCurrentNote}) => {
	
	let note = notes.map( note => (
		<li 
		onTouchEnd={()=>handleClick()} onTouchStart={()=>changeCurrentNote(note)} onClick={() =>changeCurrentNote(note)} key={note.id} 
		className={`${currentNote.id === note.id ? 'active':''} d-md-flex align-items-center justify-content-between list-group-item list-group-item-action border border-0 border-bottom border-info`}>		
			<span >{note.title}</span><i className="d-none d-md-inline text-end fa-solid fa-pencil"></i>			
		</li>
	))
	
  return (
    <div className='col'>
        <div className=''>
            <div className='d-flex justify-content-center  align-items-center text-primary py-2'>
                <img src={Logo} height={45} className={'text-center align-items-center justify-content-center'} />
				<h1 className='h5' >DropNote</h1>
            </div>
            <ul className="list-group text-center text-md-start rounded-0">
					<li onClick={() => createNewNote()} className="d-none d-md-flex align-items-center justify-content-between list-group-item list-group-item-action border border-0 border-bottom border-info">
						<span >New Note</span><i className="d-none d-md-inline text-end fa-solid fa-plus"></i>
					</li>
					{note}
				</ul>
        </div>
        <div className='d-flex justify-content-end fixed-bottom d-md-none'>
			
			<i onClick={()=>createNewNote()} className="btn btn-primary rounded-circle rounded-5 m-3 fa-solid fa-plus"></i>
		</div>
    </div>
  )
}

export default Sidebar