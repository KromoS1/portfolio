import React from "react";
import style from "./Skill.module.css";

type PropsType = {
    nameSkill: string
}

export function Skill(props:PropsType) {
    return (
        <div className={style.skill}>
            <div className={style.name}>{props.nameSkill}</div>
            <div className={style.skillPercentAndScale}>
                <div className={style.percent}>percent</div>
                <div className={style.scale}>scale</div>
            </div>
        </div>
    )
}

