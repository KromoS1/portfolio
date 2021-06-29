import React from "react";
import { Skill } from "./Skill/Skill";
import style from "./Skills.module.css";

export function Skills(){
    return(
            <div className={style.skillsBox}>
                <div className={style.heading}><h1>MY SKILLS</h1></div>
                <div className={style.skillsName}>
                    <Skill nameSkill={"HTML5"}/>
                    <Skill nameSkill={"CSS3"}/>
                    <Skill nameSkill={"React"}/>
                    <Skill nameSkill={"Redux"}/>
                    <Skill nameSkill={"JavaScript"}/>
                    <Skill nameSkill={"TypeScript"}/>
                </div>
            </div>
    )
}