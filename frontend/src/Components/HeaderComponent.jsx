import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AccountantPageIcon from "../pages/Assets/accountantPageIcon";
import HomePageIcon from "../pages/Assets/homePageIcon";
import StorePageIcon from "../pages/Assets/storePageIcon";

const styles = {
  changedLogo: {},
};

const HeaderComponent = () => {
  const navigate = useNavigate();
  
  const navigator = (path) => {
   navigate(path)
  }

  return (
    <div className="fixed top-0 w-screen h-20 bg-transparent z-50">
      <div className="w-full h-full flex justify-center items-center pt-3 flex-row text-white gap-4">
       
        <AccountantPageIcon onClick={() => navigator('/account')} />
        <HomePageIcon onClick={() => navigator('/')} />
        <StorePageIcon onClick={() => navigator('/store')}/>
  
      </div>
    </div>
  );
};

export default HeaderComponent;
