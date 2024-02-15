
import React from 'react';
import Dropdown from './Dropdown';
import Hero from './layout/hero/Hero'
import { useState } from 'react';

const Select = () => {
  const options = [
    { value: 'Data Analyst' },
    { value: 'Participant' },
    { value: 'Data Scientist' },
    { value: 'Junior Data Scientist' },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleOptionChange = (selectedOption) => {
    setSelectedValue(selectedOption.value);
  };

  return (
    <div className='p-5'>
      <div className=' '>
        <Hero value={selectedValue} />
      </div>
      <div className='flex justify-end font-montserrat font-bold text-sm'>

      <Dropdown options={options} onChange={handleOptionChange} />
      </div>
    </div>
  );
};


export default Select;
