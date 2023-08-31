import React from 'react'
import HeroImage from '../assets/heroimage.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Typed from 'react-typed';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-14 md:pt-0'>
      <div className='max-w-md md:max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-10 md:pt-0'>
        <div className='flex flex-col justify-center items-center text-center'>
          <div className='flex flex-row'>
            <Typed className='break-all text-4xl md:text-5xl lg:text-7xl font-bold text-white' strings={['Mokinys', 'Studentas', 'Programuotojas']} typeSpeed={90} backSpeed={90} backDelay={1500} loop/>
          </div>
          
          <p className='text-gray-300 pt-3 md:pt-6 pb-4 w-[100%] md:w-[90%] text-[15px] md:text-[20px]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quas esse eveniet facere obcaecati amet quidem quia eum, dolorum nihil, eos cupiditate facilis odio magnam maiores, ut nam unde? Ad.
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