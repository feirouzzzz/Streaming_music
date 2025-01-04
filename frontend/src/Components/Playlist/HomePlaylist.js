import React from 'react'

function HomePlaylist({image,title}) {
  return (
      <div className='bg-slate-500 flex items-center space-x-4 rounded-sm overflow-hidden bg-opacity-50 hover:bg-opacity-80 transition-all ' >
          <img src={image} alt={title} className='w-24 rounded-sm ' /> 
      <h1 className=""> {title} </h1>
      
      </div>
  )
}

export default HomePlaylist