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
    <div name='about' className='w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white pb-14'> 
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About me
          </p>
        </div>

        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perferendis esse necessitatibus libero repellendus, odit temporibus quia laudantium voluptates, modi unde laboriosam dolorum impedit quidem. Expedita nihil, illum, commodi necessitatibus id ducimus cupiditate eaque a sit earum eius, iusto mollitia dicta unde itaque assumenda repudiandae cumque cum vel eveniet harum?
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam consequuntur quis itaque beatae vitae, nemo sint eos dolorem veritatis, possimus facilis facere nam. Officia iste repudiandae sequi quisquam in, totam consectetur itaque natus accusamus animi quo praesentium debitis, cumque sint iusto tempore. Nisi repellendus atque eum hic molestiae deleniti fugit!
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