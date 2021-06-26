import React from "react";
import style from "./AboutMePage.module.css"
import {AboutMe} from "./AboutMe/AboutMe";
import {Services} from "./Services/Services";

export function AboutMePage () {
    return (
        <div className={style.aboutMe}>
            <AboutMe/>
            <Services/>
        </div>
    )
}