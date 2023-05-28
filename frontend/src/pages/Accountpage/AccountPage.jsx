import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent'
import { AccountOptions1 } from '../../Components/AccountOptions';
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
      <div className='bg-[#051726] w-screen h-screen flex justify-center items-center'>
      <h1 className=" text-white font-sand text-2xl z-40">Unavailable for DEMO.<br/> </h1>
        {/* <div className='w-[10rem] h-[20rem] flex flex-col justify-between items-baseline text-white mr-[5rem] mb-[16rem]'>
          <div className=''>
            <h1>-Username-</h1>
            <p>example@mail.com</p>
          </div>
          <div className='flex flex-col'>
            <button style={ pathname === "/account" ? styles.underlinedColor : styles.color } onClick={() => navigator('/account')} >Account</button>
            <button style={ pathname === "/accountmysites" ? styles.underlinedColor : styles.color } onClick={() => navigator('/accountmysites')} >My Sites</button>
          </div>
        </div>
        <div className='w-2/3 h-4/6 border-l-2 border-[#8A8A8A] flex justify-around px-10'>
          <AccountOptions1/>
        </div> */}
      </div>
    </React.Fragment>
  )
}

export default AccountPage;
