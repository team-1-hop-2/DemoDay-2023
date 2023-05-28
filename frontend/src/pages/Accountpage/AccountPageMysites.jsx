import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent'
import { useNavigate, useLocation } from "react-router-dom";
import GoogleIcon from "../../Assets/google"
import FacebookIcon from "../../Assets/facebook"

const styles = {
    underlinedColor: {
        textDecoration: "none",
        color: "rgba(255, 255, 255, 0.5)",
    },
    
    color: {
        textDecoration: "none",
    }
}
 
const AccountPageMysites = () => {

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
          <button style={ pathname === "/accountmysites" ? styles.underlinedColor : styles.color } onClick={() => navigator('/accountmysites')}>My Sites</button>
        </div>
      </div>
      <div className='w-2/3 h-4/6 border-l-2 border-[#8A8A8A] flex flex-col justify-start '>
        <div className='ml-[4rem] mt-[2rem] '>
            <GoogleIcon/>
        </div>
        <div className='ml-[4rem] mt-[2rem] '>
            <FacebookIcon/>
        </div>
            <button className='w-[10rem] h-[3rem] rounded text-white border ml-[4rem] mt-[2rem]'>Change Password</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AccountPageMysites;


