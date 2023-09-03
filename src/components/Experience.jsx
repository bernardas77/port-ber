import React from 'react'
import Ethereum from '../assets/ethereum.png'
import CSS from '../assets/css3.png'
import HTML from '../assets/html5.png'
import Python from '../assets/python.png'
import React2 from '../assets/react.png'
import Tailwind from '../assets/tailwind-css.png'
import JS from '../assets/javascript.png'
import CPP from '../assets/cpp.png'

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: HTML,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: CSS,
      title: 'CSS',
      style: 'shadow-blue-400',
    },
    {
      id: 3,
      src: JS,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: React2,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: Tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: Python,
      title: 'Python',
      style: 'shadow-yellow-700',
    },
    {
      id: 7,
      src: Ethereum,
      title: 'Solidity',
      style: 'shadow-gray-200',
    },
    {
      id: 8,
      src: CPP,
      title: 'C++',
      style: 'shadow-blue-300',
    },
  ]

  return (
    <div name='patirtis' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-14'>

      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline py-2
          '>Patirtis</p>
          <p className='py-6'>Tai yra technologijos, su kuriomis man teko dirbti.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techs.map(({id, src, title, style}) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-25 mx-auto'/>
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Experience