import React from "react";
import { Skill } from "./Skill";
import style from "./SkillsStyle.module.scss";
import redux from '../../../../icons/redux.png';
import typeScript from '../../../../icons/Typescript.svg';
import dotNet from '../../../../icons/dotNet.png';
import CSharp from '../../../../icons/CSharp.png';
import css from '../../../../icons/css3.svg'
import js from '../../../../icons/js.png';
import html from '../../../../icons/html5.png';

// export function Skills(){
//     return(
//             <div className={style.skillsBox}>
//                 <div className={style.title}>
//                     <h2>My Skills</h2>
//                     <span>My Skill</span>
//                 </div>
//                 <div className={style.skillsName}>
//                     <Skill nameSkill={"HTML5"} percent={"90%"} icon={html}/>
//                     <Skill nameSkill={"CSS3"} percent={"85%"} icon={css}/>
//                     <Skill nameSkill={"React"} percent={"80%"} icon={""}/>
//                     <Skill nameSkill={"Redux"} percent={"70%"} icon={redux}/>
//                     <Skill nameSkill={"JavaScript"} percent={"80%"} icon={js}/>
//                     <Skill nameSkill={"TypeScript"} percent={"90%"} icon={typeScript}/>
//                     <Skill nameSkill={"C#"} percent={"50%"} icon={CSharp}/>
//                     <Skill nameSkill={".Net"} percent={"35%"} icon={dotNet}/>
//                 </div>
//             </div>
//     )
// }

export function Skills(){
    return(
        <div className={style.skillsBox}>
           <div className={style.container}>
               <div className={style.title}>
                   <h2>My Skills</h2>
                   <span>My Skill</span>
               </div>
               <div className={style.skillContainer}>
                   <div className={style.row}>
                       <Skill nameSkill={"HTML5"} percent={"90%"} icon={html}/>
                       <Skill nameSkill={"CSS3"} percent={"85%"} icon={css}/>
                       <Skill nameSkill={"React"} percent={"80%"} icon={""}/>
                       <Skill nameSkill={"Redux"} percent={"70%"} icon={redux}/>
                       <Skill nameSkill={"JavaScript"} percent={"80%"} icon={js}/>
                       <Skill nameSkill={"TypeScript"} percent={"90%"} icon={typeScript}/>
                       <Skill nameSkill={"C#"} percent={"50%"} icon={CSharp}/>
                       <Skill nameSkill={".Net"} percent={"35%"} icon={dotNet}/>
                   </div>
               </div>
           </div>
        </div>
    )
}