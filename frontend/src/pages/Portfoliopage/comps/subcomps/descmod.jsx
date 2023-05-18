import React from "react";

export function Descsub (dam) {
    return (
        <div>
                <img src={dam.img} alt={"desc img missing"} style={{width: '15.625rem', height: '20.5rem'}}/>
                <h1>{dam.descH1}</h1>
                <p>{dam}</p>
                <p></p>
        </div>
    )
}