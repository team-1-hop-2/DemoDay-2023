import React from "react";
import headImg1 from "../assets/images/Image1.png"
// replace with json mock if wanted ^

 export function PortfHead ({data}) {
    console.log(data)
    return (
        <div className="flex flex-row max-h-39rem w-screen items-center overflow-hidden grid grid-cols-2">
            <div className="flex flex-col h-full w-full justify-center overflow-hidden">
                <p className="ml-24 font-semibold text-xl "> {data && data.headTitle1}</p>
                <h1 className="ml-24 font-semibold text-7xl my-10"> {data && data.headTitle2}</h1>
                <p className="ml-24 font-semibold text-xl"> {data && data.headDesc1}</p>
            </div>
            <div className=" w-full h-full flex items-center justify-center">
            <div className="relative overflow-hidden" style={{width: '30.938rem', height: '26.5rem'}}>
                <img src={headImg1} alt="imageh" className="image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>
            </div>
        </div>
    )
 }