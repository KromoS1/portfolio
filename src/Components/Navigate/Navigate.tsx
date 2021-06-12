import React from "react";
import style from "./Navigate.module.css";
import {Avatar} from "./Avatar/Avatar";
import {Navbar} from "./Navbar/Navbar";
import {Footer} from "./Footer/Footer";

export function Navigate (){
    return(
        <div id={"navigate"} className={style.navigate}>
            <Avatar/>
            <Navbar/>
            <Footer/>
        </div>
    )
}