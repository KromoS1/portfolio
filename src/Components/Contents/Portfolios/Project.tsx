import React, {FC} from 'react';
import style from './PortfoliosStyle.module.scss'

type PropsType = {
    nameProject:string
    description:string
    img:string
}

export const Project:FC<PropsType> = ({nameProject,description,img}) => {
    return (
        <div className={style.projectContainer}>
            <div className={style.project}>
                <div className={style.imgProject}>
                    <img src={img} alt="/"/>
                </div>
                <h5>
                    <a href="">{nameProject}</a>
                </h5>
                <h6>{description}</h6>
            </div>
        </div>
    )
}