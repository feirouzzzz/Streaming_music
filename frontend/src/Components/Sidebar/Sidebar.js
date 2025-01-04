import React from 'react'
import { LuLibrary } from "react-icons/lu";
import SidebarPlaylist from '../Playlist/SidebarPlaylist';
import { listPlaylist } from '../Variables';

function Sidebar() {
  return (
      <div className='bg-zinc-900 py-4 px-4 text-white w-72 min-h-screen overflow-y-scroll'>
          <h1 className='text-center text-4xl font-bold'> Spotify </h1>
          
          <div className='flex items-center space-x-2 mt-8 opacity-60'>
              <LuLibrary size={20} />
              <h2> Your library </h2>
          </div>                

          <div className='space-y-3 mt-4 '>
              {listPlaylist.map((playlist, key) => (
                  <SidebarPlaylist title={playlist.title} image={playlist.image} key={key} />
              ))}
          </div>
    </div>
  )
}

export default Sidebar