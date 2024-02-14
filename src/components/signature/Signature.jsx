import Logo from '/logo/logo.svg'
const Signature = () => {

  return (
    <div className='flex-col px-10'>


      <div className='flex justify-between items-end'>
        <div className='flex gap-16 text-start'>
          <div className='bordr border-t-[.5px] border-black w-fit pt-2'>
            <p className='font-semibold text-lg'>Etibar Huseynli</p>
            <p className='text-sm leading-3'>Chief Data Scientist</p>
          </div>
        </div>

        <div>
          <img src={Logo} alt="" className='w-72' />

        </div>
      </div>
        <div className='flex justify-between mt-10'>
          <p>The validity of certificate can be verified online at : <a href="http://www.dsa.az/verification">www.dsa.az/verification</a></p>
          <p>Certificate ID: SQL-8948780</p>
          <p>August 4, 2023</p>
        </div>
    </div>
  )
}

export default Signature