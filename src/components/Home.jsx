import React from 'react'
import HeroImage from '../assets/heroimage.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import { Link } from 'react-scroll'

const Home = () => {

  const [text] = useTypewriter({
    words: ['Mokinys', 'Studentas', 'Programuotojas'],
    loop: {}
  })

  return (
    <div name='pagrindinis' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-14 md:pt-0'>
      <div className='max-w-md md:max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-10 md:pt-0'>
        <div className='flex flex-col justify-center items-center text-center'>
          <div className='flex flex-row'>
            <p className='break-all text-4xl md:text-5xl lg:text-7xl font-bold text-white'>{text}</p>
            <span className='text-4xl md:text-5xl lg:text-7xl font-bold text-white'>
              <Cursor />
            </span>
          </div>
          
          <p className='text-gray-300 pt-3 md:pt-6 pb-4 w-[100%] md:w-[90%] text-[15px] md:text-[20px]'>
            Sveiki, mano vardas Bernardas. Laisvalaikiu mėgstu programuoti, dalyvauti projektuose, domiuosi elektronine prekyba ir savo verslo kūrimu. Toliau pamatysite mano projektus bei technologijas, su kuriomis man teko dirbti. Su manimi susisiekti galite per LinkedIn, Gmail arba kontakto formą apačioje. Taip pat galite atsisiūsti mano rezume.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25}/>
              </span>
            </Link>
          </div>
        </div>

        <div className='md:min-w-[350px] md:w-[90%] mt-6 md:mt-0'>
          <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-[90%]'/>
        </div>
      </div>
    </div>
  )
}

export default Home