import React from "react";
import style from "./ResumePage.module.css"
import {Skills} from "./MySkills/Skills";
import { Resume } from "./Resume/Resume";

export function ResumePage () {
    return (
        <div className={style.resumeAndSkills}>
            <Skills/>
            <Resume/>
        </div>
    )
}