import React from "react";
import style from "./Service.module.css";

export function Service(){
    return (
        <div className={style.block}>
            <div>icon</div>
            <div><h3>Web Design</h3></div>
            <div>description</div>
        </div>
    )
}