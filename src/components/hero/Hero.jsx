import React from 'react';

const imageMap = {
    'Data Analyst': '../../../public/hero/bg1.png',
    'Participant': '../../../public/hero/bg1.png',
    'Data Scientist': '../../../public/hero/bg1.png',
    'Junior Data Scientist': '../../../public/hero/bg1.png',
};

const Hero = ({ value = 'Data Analyst' }) => {
    const imageUrl = imageMap[value];

    return (
        <div className='relative bg-slate-500 '>
            <img src={imageUrl} alt="" className='w-full' />
            <h1 className='absolute inset-0 pl-16 text-start flex items-center text-7xl tracking-wide font-extralight leading-tight text-white'>Data Science Academy <br /> Certificate</h1>
        </div>
    );
};

export default Hero;
