import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../Components/HeaderComponent";

const styles ={
  topContainer:{
    width:'100vw',
    height:'100vh',
    boxSizing:'border-box',
    overflow:'clip'
  },
  bgGrad:{
    position:'absolute',
    width:'100vw',
    height:'200vh',
    // background:'linear-gradient(111deg, rgba(13, 19, 28, 0.61) 22.85%, rgba(8, 8, 8, 0.556494) 40.34%, #101A28 52.63%, #000B1D 77.33%)',
    background:'linear-gradient(111deg, rgba(13, 19, 28, 0.5856) 22.85%, rgba(8, 8, 8, 0.534234) 40%, rgba(16, 26, 40, 0.96) 46.73%, rgba(0, 11, 29, 0.96) 58.83%)',
    zIndex:10
  },
  bgImg:{
    position:'absolute',
    left:'5vw',
    top:'10vh',
    maxHeight:'120vw',
    maxWidth:'52.5vw',
    // height:'120vh',
    // width:'52.5vw',
    height:'auto',
    width:'auto',
  },
  fullHeight:{
    height:'200vh'
  }
}

export const Homepage = () => {
  const navigate = useNavigate();
  const navigator = (path) => {
   navigate(path)
  }
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="flex justify-around items-center w-screen h-screen box-border overflow-clip bg-gradient-135 from-darkblue via-pinkblue to-darkpurple">
      {/* <div className=" flex justify-around items-center  w-screen h-screen bg-red-500"> */}
        <div className="flex flex-col z-40">
          <text className=" text-white font-sand text-2xl z-40"> Find the perfect website <br/> for you </text>
          <button className="flex flex-wrap items-center justify-around text-white font-sand p-1 border-2 border-white rounded-lg w-48 h-14 text-xl mt-10 z-40" onClick={()=>navigator('/store')}>Explore</button>
        </div>
        <div className="flex flex-col z-40" >
          <text className="font-sand text-white text-5xl ">Your Name.</text>
          <text className="font-sand text-white text-1xl ">A Portfolio building website</text>
        </div>
        <div className="absolute w-screen h-screen box-border overflow-scroll">
          <img src={require("../../Assets/Example Templates.png")} alt="" style={styles.bgImg} />
        </div>
        <div className="absolute w-screen h-screen box-border overflow-hidden pointer-events-none">
          <div style={styles.bgGrad}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
