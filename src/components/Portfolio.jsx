import React from 'react'
import ImageSearch from '../assets/image-search-app.jpg'
import MintMaster from '../assets/mintmaster.jpg'
import Pong from '../assets/pong.jpg'
import SpaceInvaders from '../assets/space-invaders.jpg'
import Bot from '../assets/bot.png'
import Me from '../assets/me.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: ImageSearch,
    },
    {
      id: 2,
      src: SpaceInvaders,
    },
    {
      id: 3,
      src: Bot,
    },
    {
      id: 4,
      src: MintMaster,
    },
    {
      id: 5,
      src: Pong,
    },
    {
      id: 6,
      src: Me,
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Mano darbai</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({id, src}) => (
              <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 lg:h-[180px] lg:w-[320px]'/>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration:200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration:200 hover:scale-105'>Kodas</button>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </div>
  )
}

export default Portfolio