import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> 
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
    </div>
  )
}

export default About