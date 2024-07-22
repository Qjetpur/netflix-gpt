import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[16%] px-12 absolute text-white  w-full bg-gradient-to-r from-black aspect-video">
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white p-4 px-12 text-xl text-black  rounded-lg hover:bg-opacity-80'> ▶ PlayButton</button>
            <button className='bg-gray-500 mx-2 p-4 px-12 text-xl text-white bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle