import React from "react";
import style from "../ResumeStyle.module.scss";

type PropsType = {
    year:string
    nameCompany:string
    position:string
    desc:string
}

export function Education(props:PropsType) {
    return (
        <div className={style.organization}>
            <div className={style.dateWorking}>
                <h6>{props.year}</h6>
            </div>
            <div className={style.organizationDescription}>
                <h5>{props.position}</h5>
                <h6>{props.nameCompany}</h6>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}