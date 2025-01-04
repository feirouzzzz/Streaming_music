import React from 'react'

function HomeArtiste({nom,image}) {
  return (
    <div className='bg-slate-700 bg-opacity-50 hover:bg-opacity-80 rounded-md transition-all '>
        <img src={image} alt={nom} className='w-full h-72 p-6 rounded-full'></img>
        <h1 className='text-lg px-6 pb-6'>{nom}</h1>
    </div>
  )
}

export default HomeArtiste