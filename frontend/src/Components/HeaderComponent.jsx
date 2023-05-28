import React from "react";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import AccountantPageIcon from "../Assets/accountantPageIcon";
import HomePageIcon from "../Assets/homePageIcon";
import StorePageIcon from "../Assets/storePageIcon";

// const styles = {
  // underlinedColor: {
    // textDecoration: "none",
    // marginRight: "20px",
    // borderBottom: "2px solid white",
  // },
  
  // color: {
    // textDecoration:"none",
  // }
// };

const HeaderComponent = (props) => {
  const pathname = window.location.pathname
  const navigate = useNavigate();
  
  const navigator = (path) => {
   navigate(path)
  }
  return (
    <div className="fixed top-0 w-screen h-20 bg-transparent z-50">
      <div className="w-full h-full flex justify-center items-center pt-3 flex-row text-white gap-4">
       
        <AccountantPageIcon  PStyle={pathname==='/account' ? 1 : 0.5} onClick={() => navigator('/account')} />
        <HomePageIcon PStyle={pathname==='/' ? 1 : 0.5} onClick={() => navigator('/')} />
        <StorePageIcon PStyle={pathname==='/store' ? 1 : 0.5} onClick={() => navigator('/store')}/>
  
      </div>
    </div>
  );
};

export default HeaderComponent;
