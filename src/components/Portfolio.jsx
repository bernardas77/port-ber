import React from 'react'
// import MintMaster from '../assets/mintmaster.jpg'
// import Pong from '../assets/pong.jpg'
// import SpaceInvaders from '../assets/space-invaders.jpg'
// import Bot from '../assets/bot.png'
// import Me from '../assets/me.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: '/image-search-app.jpg',
    },
    {
      id: 2,
      src: '',
    },
    {
      id: 3,
      src: '',
    },
    {
      id: 4,
      src: '',
    },
    {
      id: 5,
      src: '',
    },
    {
      id: 6,
      src: '',
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
                
                <div style={{backgroundImage: `url(${portfolios[0].src})`}} alt="" className='rounded-md duration-200 hover:scale-105 lg:h-[180px] lg:w-[320px] '></div>
              
                
                <button className='hidden hover:block m-auto p-3 text-black bg-slate-300'>Kodas</button>
              </div>
            ))
          }

        </div>

      </div>
    </div>
  )
}

export default Portfolio