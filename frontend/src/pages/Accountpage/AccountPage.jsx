import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent'

const AccountPage = () => {
  return (
    <React.Fragment>
    <HeaderComponent/>
    <div className='bg-[#002445] w-screen h-screen flex justify-center items-center'>
      
      <div className='w-[10rem] h-[20rem] flex flex-col justify-between items-baseline text-white mr-[5rem] mb-[16rem]'>
        <div className=''>
          <h1>-Username-</h1>
          <p>example@mail.com</p>
        </div>
        <div className='flex flex-col'>
          <button>Account</button>
          <button>My Sites</button>
        </div>
      </div>
      <div className='w-2/3 h-4/6 border-l-2 border-[] flex justify-around'>
        <div className='w-full h-full'>
          <div className=' bg-[#494949] w-3/5 h-[16rem] ml-[5rem] mt-[2rem] rounded'></div>
          <div className=' bg-[#494949] w-3/5 h-[16rem] ml-[5rem] mt-[2rem] rounded'></div>
        </div>
        <div className='w-full h-[15rem] flex flex-col justify-around items-center'>
          <h1 className='text-white'>Webpage_Name_Placeholder</h1>
          <div className='flex justify-center items-center'>
            <button className='border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem]'>Undeplay</button>
            <button className='border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem]'>Manage</button>
            <button className='border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem]'>View Site</button>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default AccountPage;
