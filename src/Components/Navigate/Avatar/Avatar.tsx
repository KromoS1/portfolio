import React from "react";
import style from "../NavigateStyle.module.scss";
import avatar from "../../../img/avatar.jpg"

export function Avatar (){
    return(
        <div className={style.avatar}>
            <a href="/">
                <img src={avatar} alt="avatar"/>
            </a>
        </div>
    )
}