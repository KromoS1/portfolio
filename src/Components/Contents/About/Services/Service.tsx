import React, {FC} from 'react';
import style from './ServicesStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition} from '@fortawesome/free-solid-svg-icons'

interface Props{
    icon:IconDefinition
    title:string
    desc:string
}

export const Service:FC<Props> = ({icon,title,desc}) => {
    return (
        <div className={style.serviceBox}>
            <div className={style.myService}>
                <span>
                    <i>
                        <FontAwesomeIcon icon={icon}/>
                    </i>
                </span>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    )
}