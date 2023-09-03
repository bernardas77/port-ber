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
      href: 'https://github.com/bernardas77/image-search-app'
    },
    {
      id: 2,
      src: '/mintmaster.jpg',
      href: 'https://github.com/bernardas77/nft-contract'
    },
    {
      id: 3,
      src: 'pong.jpg',
      href: 'https://github.com/bernardas77/pong-game'
    },
    {
      id: 4,
      src: 'space-invaders.jpg',
      href: 'https://github.com/bernardas77/space-invaders'
    },
    {
      id: 5,
      src: 'bot.png',
      href: 'https://github.com/bernardas77/discord-crypto-bot'
    },
    {
      id: 6,
      src: 'me.jpg',
      href: 'https://github.com/bernardas77/port-ber'
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Mano darbai.</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({id, src, href}) => (
              <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                
                <div style={{backgroundImage: `url(${src})`}} alt="" className='rounded-md duration-200 hover:scale-105 lg:h-[180px] lg:w-[320px] bg-cover bg-center '>
                  <a href={href} target='_blank' rel='noreferrer'>
                    <div className='group hover:bg-black/40 w-full h-full relative'>
                      <button className='hidden group-hover:block p-3 text-black bg-white rounded-md fixed left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]'>Kodas</button>
                    </div>
                  </a>
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