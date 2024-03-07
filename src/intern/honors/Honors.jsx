import React from 'react'
import HonorsBG from '/intern/honors.svg'
import EtibarM from '/signatures/EtibarM.svg'


const Honors = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <img src={HonorsBG} alt="" className='  print:w-full  ' />

      <div className='flex flex-col absolute w-2/5  print:w-5/6  print:-left-5 print:top-44 print:bottom-2/4 print:pt'>

        <textarea rows='1' className=' mt-56 font-kunstler text-[#20497d] text-7xl w-full text-center focus:outline-none mx-auto print:text-[40px] print:m-0 print:text-end  print:absolute'>Gurban Guliyev</textarea>


        <textarea className='print:text-[8px] print:text-end print:leading-[6px] print:mt-11 '>has successfully completed 3 months Data Science Internship at</textarea>
        <textarea className='print:text-[8px] print:text-end print:leading-[6px]'>QSS Analytics onOctober 14 , 2023</textarea>
        <textarea rows={3} className='print:absolute  print:text-[7px] print:tracking-wider print:w-[76%] print:ml-12 print:top-[85px]'                                                                                                                                                                                                                                                                                                                                                                  >
          Special note: During working process, successfully completion
          of most assigned tasks and his positive habits and qualities
          enable Gurban to be a professional expert in the future
        </textarea>
        <div className='print:absolute flex flex-col gap-1  print:text-[7px] print:tracking-wider print:w-[76%] print:ml-12 print:top-32 print:leading-[5px]'>
          Accomplished programs during internship:
          <textarea rows="1" className='print:pb-[2px] '>•  Data Science for Python</textarea>
          <textarea rows="1" className='print:pb-[2px] '>•  Machine Learning with Python</textarea>
          <textarea rows="1" className='print:pb-[2px] '>•  Deep Learning with Python</textarea>
          <textarea rows="1" className='print:pb-[2px] '>•  SQL for Data Science</textarea>
          <textarea rows="1" className='print:pb-[2px] '>•  Introduction to Big Data</textarea>
          <textarea rows="1" className='print:pb-[2px] '>•  Data Analytics with Excel</textarea>
          <textarea rows="1" className='print:pb-[2px] '></textarea>
          <textarea rows="1" className='print:pb-[2px] '></textarea>
          <textarea rows="1" className='print:pb-[2px] '></textarea>
          <textarea rows="1" className='print:pb-[2px] '></textarea>

        </div>



      </div>
        <div className='flex   text-start   print:absolute print:bottom-3  print:left-5'>
          <div className='pt- relative '>
            <img src={EtibarM} alt="" className='print:absolute print:bottom-2 print:m-6' />

            <hr className='border-black  print:border print:border-t-0' />

            <p className='font-medium print:text-[10px]'>Etibar Huseynli</p>
            <p className='font-medium print:text-[10px]'>Director of QSS Analytics</p>
          </div>

        </div>


    </div>
  )
}

export default Honors