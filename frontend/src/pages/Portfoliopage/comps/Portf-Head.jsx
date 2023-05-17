import React from "react";
import img1 from "../assets/images/Image1.png"

 export function PortfHead ({data}) {
    console.log(data)
    return (
        <div className="flex flex-row max-h-39rem w-screen items-center overflow-hidden">
            <div className="flex flex-col h-full w-3/6 justify-center overflow-hidden">
                <p className="ml-24 font-semibold text-xl "> {data && data.headTitle1}</p>
                <h1 className="ml-24 font-semibold text-7xl my-10"> {data && data.headTitle2}</h1>
                <p className="ml-24 font-semibold text-xl"> {data && data.headDesc1}</p>
            </div>
            <div className="w-3/6 h-full" >
                <img src={img1} alt="imageh" className="object-cover object-center"/>
            </div>
        </div>
    )
 }