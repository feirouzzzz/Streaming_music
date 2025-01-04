import React from 'react'

function SidebarPlaylist({title,image}) {
  return (
      <button className='flex w-full items-center hover:bg-gray-400 transition-all p-1 rounded-sm space-x-2 '>
          <img src={image} alt={title} className='w-14 rounded-sm ' />
          <h3> {title} </h3>
    </button>
  )
}

export default SidebarPlaylist