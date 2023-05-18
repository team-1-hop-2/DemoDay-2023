import React from "react";
import { Descsub } from "./subcomps/descmod";


 export function PortDesc ({data}) {
    return (
        <div className="flex flex-row w-screen items-center overflow-hidden justify-center" style={{height: '43rem'}}>
            <div className="flex flex-row items-center justify-around" style={{width: '62.5rem', height: '20.5rem'}}>
                <Descsub/>
                <div>aaaa</div>
                <div>aaaa</div>
            </div>
        </div>
    )
 }