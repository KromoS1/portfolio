import React from 'react';
import style from './SkillsStyle.module.scss';
import { faReact, } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


type PropsType = {
    nameSkill: string
    percent: string
    icon:string
}

export function Skill(props: PropsType) {
    const icons = () => {
        if (props.nameSkill === "React") return <FontAwesomeIcon className={style.icon} style={{height:"10%"}} icon={faReact}/>
        return  <img src={props.icon} alt="/" className={style.icon}/>
    }
    return (
        <div className={style.skill}>
           <div className={style.progressSkill}>
               <div className={style.header}>
                   {icons()}
                   <h6>{props.nameSkill}</h6>
               </div>
               <div className={style.progressInner}>
                   <div className={style.percent}>
                       {props.percent}
                   </div>
                   <div className={style.progressContainer}>
                       <span style={{width: `${props.percent}`}}/>
                   </div>
               </div>
           </div>
        </div>

    )
}

