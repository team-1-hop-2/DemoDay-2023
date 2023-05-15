import React from "react";


 export function PortfHead ({data}) {
    console.log(data)
    return (
        <div className="flex flex-row max-h-39rem w-screen items-center">
            <div className="flex flex-col h-5/6 w-3/6 justify-center" >
                
                <p className="ml-24 font-semibold text-xl "> {data && data.title1}</p>
                <h1 className="ml-24 font-semibold text-7xl my-10"> {data && data.title2}</h1>
                <p className="ml-24 font-semibold text-xl"> {data && data.desc1}</p>
            </div>
            <div></div>
        </div>
    )
 }