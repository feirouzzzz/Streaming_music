import React from 'react'

function HomeAlbum({image,titre,soustitre}) {
  return (
    <div className='bg-slate-600 transition-all bg-opacity-50 hover:bg-opacity-80 p-3 rounded-md '>
      <img src={image} alt='album1' className='w-full rounded-md pb-4'></img>
      <h1 className="font-semibold"> {titre} </h1>
      <h2 className=' opacity-50'>{soustitre} </h2>
    </div>
  )
}

export default HomeAlbum