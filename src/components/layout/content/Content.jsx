import React from 'react'
import Logo from '/logo/logo.svg'
import Signature from '/imza.svg'
import { useMainContext } from '../../../context/context'



const Content = () => {
  const contentData = {
    'Data Analyst': {
      'title': "Successfully completed all requirements of the studies and exercises for 190 hours in the intensive Data Science Bootcamp and graduated as Certified Data Analyst and has earned the distinction and credential of Data Science Academy",
      'content': "This specialization provided the learner with knowledge of data cleaning, visualization, machine learning and programming using R, Python, Tableau, SPSS, SPSS Modeler, SQL, Hadoop, Spark, Spark SQL, Spark MLlib, Pytorch, AWS, Mongo DB, MapReduce, Hive and Tensorflow tools simultaneously. The candidate has successfully completed the Data Science Bootcamp program and received good grades, is capable of efficiently using the tools for  visualization and data analyzing including Tableau, SPSS, SQL and has strong professional skills. The candidate is capable of inspecting, cleansing, describing, transforming and modeling data with the goal of discovering useful information."
    },
    'Participant': {
      'title': "Proficiently completed all requirements of the studies and exercises for 190 hours in the intensive Data Science Bootcamp and graduated as Participant and has earned the credential of Data Science Academy",
      'content': "This specialization provided the learner with knowledge of data cleaning, visualization, machine learning and programming using R, Python, Tableau,SPSS, SPSS Modeler, SQL, Hadoop, Spark, Spark SQL, Spark MLlib, Pytorch, AWS, Mongo DB, MapReduce, Hive and Tensorflow tools simultaneously. The person has completed the Data Science Bootcamp wit"

    },
    'Data Scientist': {
      'title': "Proficiently completed all requirements of the studies and exercises for 190 hours in the intensive Data Science Bootcamp and graduated as Certified Data Scientist and has earned the distinction and credential of Data Science Academy",
      'content': "This specialization provided the learner with knowledge of data cleaning, visualization, machine learning and programming using R, Python, Tableau, SPSS, SPSS Modeler, SQL, Hadoop, Spark, Spark SQL, Spark MLlib, Pytorch, AWS, Mongo DB, MapReduce, Hive and Tensorflow tools simultaneously. The  candidate is a data expert who proficiently completed the Data Science Bootcamp and achieved exceptional results with technical skills and ability to  solve complex business problems, create a variety of scalable machine learning models for company needs and tracking of its performance. The Data Scientist is well-suited to work in a team, possessing a passion for data science and data analysis, machine learning and creating specific systems and tracking how they perform over time with the goal of discovering useful information with coding skills"
    },
    'Junior Data Scientist': {
      'title': "Proficiently completed all requirements of the studies and exercises for 190 hours in the intensive Data  Science Bootcamp and graduated as Certified Junior Data Scientist and has earned the distinction and credential of Data Science Academy",
      'content': "This specialization provided the learner with knowledge of data cleaning, visualization, machine learning and programming using R, Python, Tableau, SPSS, SPSS Modeler, SQL, Hadoop, Spark, Spark SQL, Spark MLlib, Pytorch, AWS, Mongo DB, MapReduce, Hive and Tensorflow tools simultaneously. The participant successfully completed the Data Science Bootcamp with excellent grades and has the necessary programming, analytical, technical, research, business, and software skills such as SPSS, SQL, visualization tools, and to some extent R and Python. A Junior Data Scientist is able to work in a team, possessing a passion for data science and data analysis, machine learning and creating specific systems and tracking how they perform over time, is capable of inspecting, cleansing, describing, transforming and modeling data with the goal of discovering useful information with coding skills."
    }
  };

  const { selectedValue } = useMainContext();
  const { title, content } = contentData[selectedValue];

  return (
    <div>
      <div className='px-10 font-montserrat'>
        <textarea rows='1' className='w-full focus:outline-none capitalize pb-6 font-light text-5xl'>Xəyal xudiyev</textarea>
        <textarea value={title} rows="4" className='w-full focus:outline-none text-xl text-justify leading-[22px] font-medium tracking-wide '>
          {title}
        </textarea>
        <textarea rows="1" className='w-full focus:outline-none text-2xl pt text-[#e2175c] font-bold'>Data Science Bootcamp</textarea>
        <textarea value={content} rows="8" className='w-full focus:outline-none tracking-wide text-justify leading-4 font-medium my-2'>
          {content}
        </textarea>
      </div>

      <div className='flex-col px-10'>
        <div className='flex justify-between items-end'>
          <div className='flex gap-16 text-start'>
            <div className='pt-2 relative'>
              <img src={Signature} alt="" className='absolute bottom-6 m-2' />

              <hr className='' />

              <p className='font-medium text-lg'>Etibar Huseynli</p>
              <p className='text-sm font-light leading-3'>Chief Data Scientist</p>
            </div>
          </div>
          <div>
            <img src={Logo} alt="" className='w-72' />
          </div>
        </div>
        <div className='flex justify-between items-center mt-8 text-xs '>
          <p className='text-[#959699]   font-bold'>The validity of certificate can be verified online at : <a href="http://www.dsa.az/verification">www.dsa.az/verification</a></p>
          <div className=' flex  tracking-[5px] pl-9 '>Certificate ID:<textarea className=' tracking-[5px]  focus:outline-none' rows='1'>SQL-8948780</textarea></div>
          <p ><textarea rows="1" className='tracking-[5px] focus:outline-none w-52 text-end'>14 January,2023</textarea></p>
        </div>
      </div>

    </div>
  )
}

export default Content