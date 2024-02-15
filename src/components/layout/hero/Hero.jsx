import React from 'react';

const imageMap = {
    'Data Analyst': '/hero/analyst.svg',
    'Participant': '/hero/background.svg',
    'Data Scientist': '/hero/scientist.svg',
    'Junior Data Scientist': '/hero/junior.svg',
};

const Hero = ({ value = 'Data Analyst' }) => {
    const imageUrl = imageMap[value];

    return (
        <div className='relative bg-slate-500'>
            <img src={imageUrl} alt="" className='w-full' />
            <h1 className='absolute inset-0 pl-16 text-start flex items-center text-7xl tracking-wide  leading-tight text-white font-montserrat font-light'>Data Science Academy <br /> Certificate</h1>
        </div>
    );
};

export default Hero;
 