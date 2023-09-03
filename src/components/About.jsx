import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const About = () => {

  const photos = [
    {
      src: '/1.jpg'
    },
    {
      src: '/2.jpg'
    },
    {
      src: '/3.jpg'
    },
    {
      src: '/4.jpg'
    },
    {
      src: '/5.jpg'
    },
  ];

  const [CurrSrc, SetCurrSrc] = useState(0);

  return (
    <div name='apie' className='w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white pb-14'> 
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Apie mane
          </p>
        </div>

        <p className='text-xl mt-20'>
          Programuoju jau šešerius metus. Pradėjau nuo robotikos srities ir Arduino mikrovaldiklių kodavimo. Pastaruoju metu domiuosi įvairiomis programavimo technologijomis bei kalbomis. Esu sukūręs įvairių projektų: NFT kontraktas, Discord bot'ai, React bei kitos Front-End aplikacijos.
        </p>

        <br />

        <p className='text-xl'>
          Taip pat turiu patirties dalyvaujant tarptautiniuose projektuose, kaip Erasmus+, kurio nuotraukas galite matyti apačioje, tarptautiniai Startup Hakatonai ir t.t. Turiu vidurinį išsilavinimą, mokyklą baigiau iš visų egzaminų gaudamas virš 90 balų. Esu komunikabilus, gebantis dirbti grupėje ir siekiantis tobulėti žmogus.
        </p>
      </div>
      
      <div className='w-full h-[350px] max-w-screen-lg py-8 mx-auto'>
        
        <div style={{backgroundImage: `url(${photos[CurrSrc].src})`}} className='w-full h-full rounded-2xl max-w-[500px] mx-auto bg-center bg-cover duration-500 relative group'>
          <div className='absolute top-[50%] left-0 -translate-x-0 -translate-y-[50%] rounded-full p-1 group-hover:bg-black/60 cursor-pointer'>
            <BsChevronCompactLeft onClick={() => {CurrSrc === 0 ? SetCurrSrc(photos.length-1) : SetCurrSrc(CurrSrc - 1)}} size={40}/>
          </div>
          
          <div className='absolute top-[50%] right-0 -translate-x-0 -translate-y-[50%] rounded-full p-1 group-hover:bg-black/60 cursor-pointer'>
            <BsChevronCompactRight onClick={() => {CurrSrc === photos.length-1 ? SetCurrSrc(0) : SetCurrSrc(CurrSrc + 1)}} size={40} />
          </div>
        </div>
    
      </div>
      
    </div>
  )
}

export default About