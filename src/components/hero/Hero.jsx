import React from 'react'
import HeroImg from '/hero/bg.jpeg'

const Hero = () => {
    return (
        <div className='relative'>
            <img src={HeroImg} alt="" className='w-full' />
            <h1 className='absolute inset-0 pl-16 text-start flex items-center  text-8xl  tracking-wide font-extralight leading-tight f text-white'>Data Science Academy <br /> Certificate</h1>
        </div>
    )
}

export default Hero