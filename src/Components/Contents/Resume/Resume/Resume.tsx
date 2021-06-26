import React from "react";
import style from "./Resume.module.css";
import { Work } from "./Work/Work";
import {Education} from "./Education/Education";

export function Resume(){
    return (
        <div className={style.resumeBox}>
            <div className={style.resume}>
                <h1>RESUME</h1>
            </div>
            <div className={style.workingExp}>
                <div>icon</div>
                <h2>Working Experience</h2>
            </div>
            <div className={style.dataAboutWorks}>
                <div className={style.dateWorking}>
                    <div className={style.date}>2014</div>
                    <div className={style.date}>2017</div>
                    <div className={style.date}>2021</div>
                </div>
                <div className={style.descriptionWorking}>
                    <Work/>
                    <Work/>
                    <Work/>
                </div>
            </div>
            <div className={style.educationalQualification}>
                <div>icon</div>
                <h2>Educational Qualification</h2>
            </div>
            <div className={style.dataAboutEducational}>
                <div className={style.dateEducation}>
                    <div className={style.date}>2014</div>
                    <div className={style.date}>2017</div>
                    <div className={style.date}>2021</div>
                </div>
                <div className={style.descriptionEducation}>
                    <Education/>
                    <Education/>
                    <Education/>
                </div>
            </div>
        </div>
    )
}
