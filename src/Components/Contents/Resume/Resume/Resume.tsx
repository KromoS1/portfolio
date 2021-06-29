import React from "react";
import style from "./Resume.module.css";
import {Work} from "./Work/Work";
import {Education} from "./Education/Education";

export function Resume(){
    return (
        <div className={style.resumeBox}>
            <div className={style.resume}><h1>RESUME</h1></div>
            <div className={style.workingExp}>
                <div>icon</div>
                <h2>Working Experience</h2>
            </div>
            <div className={style.AboutWorks}>
                <Work/>
                <Work/>
                <Work/>
            </div>
            <div className={style.educationalQualification}>
                <div>icon</div>
                <h2>Educational Qualification</h2>
            </div>
            <div className={style.dataAboutEducational}>
                    <Education/>
                    <Education/>
                    <Education/>
            </div>
        </div>
    )
}
