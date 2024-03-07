import React from 'react'
import NormalBG from '/intern/normal.svg'
import EtibarM from '/signatures/EtibarM.svg'


const Normal = () => {
    return (
        <div className='flex justify-center items-center relative '>
            <img src={NormalBG} alt="" className='block ' />
            <div className='flex flex-col absolute bg-slate-500'>
                <textarea rows='1' className='   font-kunstler text-[#20497d]   text-8xl  text-center focus:outline-none w-3/4 mx-auto'>Khayal Khudiyev</textarea>
                <textarea>has successfully completed 3 months Data Science Internship at</textarea>
                <textarea>QSS Analytics onOctober 14 , 2023</textarea>
                <textarea rows={3}>
                    Special note: During working process, successfully completion
                    of most assigned tasks and his positive habits and qualities
                    enable Gurban to be a professional expert in the future
                </textarea>
                <textarea>
                    Accomplished programs duringinternship:
                    • Data Science for Python
                    • Machine Learning with Python
                    • Deep Learning with Python
                    • SQL for Data Science
                    • İntroduction to Big Data
                    • Data Analytics with Excel
                </textarea>
                {/* <div className='flex gap-16 text-start px-8'>
                    <div className='pt-2 relative'>
                        <img src={EtibarM} alt="" className='absolute bottom-6 m-2' />

                        <hr className='' />

                        <p className='font-medium text-lg'>Etibar Huseynli</p>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Normal 