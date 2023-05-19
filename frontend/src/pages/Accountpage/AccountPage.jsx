import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent'
import { useNavigate,useLocation } from "react-router-dom";

const styles = {
  underlinedColor: {
      textDecoration: "none",
      color: "rgba(255, 255, 255, 0.5)",
  },
  
  color: {
      textDecoration: "none",
  }
}

const AccountPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  const navigator = (path) => {
   navigate(path)
  }
  
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
          <button style={ pathname === "/account" ? styles.underlinedColor : styles.color } onClick={() => navigator('/account')} >Account</button>
          <button style={ pathname === "/accountmysites" ? styles.underlinedColor : styles.color } onClick={() => navigator('/accountmysites')} >My Sites</button>
        </div>
      </div>
      <div className='w-2/3 h-4/6 border-l-2 border-[#8A8A8A] flex justify-around'>
        <div className='w-full h-full'>
          <div className=' bg-[#494949] w-3/5 h-[16rem] ml-[5rem] mt-[2rem] rounded'></div>
          <div className=' bg-[#494949] w-3/5 h-[16rem] ml-[5rem] mt-[2rem] rounded'></div>
        </div>
        <div className='w-full h-[15rem] flex flex-col justify-around items-center'>
          <h1 className='text-white'>Webpage_Name_Placeholder</h1>
          <div className='flex justify-center items-center'>
            <button className='border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem] px-6 py-3 outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex'>Undeplay</button>
            <button className='border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem] px-8 py-3 outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex'>Manage</button>
            <button className='border border-white rounded w-[8rem] h-[3rem] text-white mr-[2rem] px-7 py-3 outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex'>View Site</button>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default AccountPage;
