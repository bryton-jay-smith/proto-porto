import React from 'react';
import './style.css';
import { Data } from "./data.js";

export const Mode = () => {
    
    function LoadInfo (a) {
        let aClass = document.getElementById("Info");
        let aInfo = Data[a.key].info;
        let aImg = Data[a.key].img
        aImg = "<div>"+aImg+"</div>"   
        aClass.innerHTML = "";
        aClass.innerHTML = aImg + aInfo;
    }

    return (
    <>
    <div className="container">
        <div className="columns is-gapless">
            <div className="column">
                <div className="message is-dark info">
                <div id="Info" className="info subtitle message-body"></div>
                </div>
            </div>
            <div className="column is-2">
                {Data.map((data, key ) => {
                    return (
                        <button className="button is-large is-dark is-fullwidth name" key={key} id={key+"-name"} onClick={()=>LoadInfo({key})}>
                            {data.name}
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
    </>    
    )
}