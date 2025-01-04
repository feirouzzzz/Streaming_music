import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePlaylist from '../../Components/Playlist/HomePlaylist'
import { listAlbum, listArtist, listPlaylist } from '../../Components/Variables'
import HomeAlbum from '../../Components/Album/HomeAlbum'
import HomeArtiste from '../../Components/Artiste/HomeArtiste'

function Home() {
    return (
        <div className="bg-black w-full min-h-screen flex text-white">
            <Sidebar />

            <div className='w-full '>
                <div className="  w-full px-12 pt-40 pb-6 bg-gradient-to-b from-purple-800 to-black ">
                    <h1 className='my-4 text-3xl font-bold text-white'>Good morning</h1>
                    <ul className=' grid grid-cols-4 gap-4 text-white '>
                        {listPlaylist.map((playlist, key) => (
                            key < 8 && <HomePlaylist title={playlist.title} image={playlist.image} />
                        ))}
                    </ul>
                </div>
                <div className='mt-10 px-12 mb-80 '>
                    <div className='flex justify-between items-center pb-4 '>
                        <h1 className=' text-2xl font-bold ' >Album </h1> 
                        <button className='text-gray-500 font-medium  '>SEE MORE</button>
                    </div>
                    <ul className='grid grid-cols-5 gap-4'>
                       
                        {listAlbum.map((album, key) => (
                           key <5 && <HomeAlbum image={album.image} titre={album.titre} soustitre={album.soustitre} />
                        )
                        )}
                    </ul>



                    <div className='mt-10'>
                        <div className='flex justify-between items-center pb-4'>
                        <h1 className='text-2xl font-medium'>Artiste</h1>
                            <button className='text-gray-500 font-medium'>SEE MORE</button>
                           
                        </div>
                        <ul className='grid grid-cols-4 gap-3'>
                            {listArtist.map((artiste,key) => (
                              key<4 &&  <HomeArtiste nom={artiste.nom} image={artiste.image} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
  )  
}

export default Home