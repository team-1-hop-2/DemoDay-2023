import React from "react";

export const Homepage = () => {
  return (
    <div className=" flex justify-around items-center  w-screen h-screen bg-gradient-135 from-darkblue via-pinkblue to-darkpurple ">
      <div>
        <text className=" text-white font-sand text-2xl "> Find the perfect website <br/> for you </text>
        <button className="flex flex-wrap items-center justify-around text-white font-sand p-1 border-2 border-white rounded-lg w-48 h-14 text-xl mt-10">Explore</button>
      </div>
      <div className="flex flex-col" >
        <text className="font-sand text-white text-5xl ">Simply_Web</text>
        <text className=" ">Quick_Intro</text>
      </div>
    </div>
  );
};
