import React, {FC} from 'react'
import style from '../ContactsStyle.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition} from '@fortawesome/free-solid-svg-icons'


export type PropsType = {
    title: string
    icon: IconDefinition
    info: string[]
}
export const Contact:FC<PropsType> = props => {

return (
        <div className={style.contactInfo}>
            <span>
                <FontAwesomeIcon className={style.icon} icon={props.icon}/>
            </span>
            <div className={style.info}>
                <h6>{props.title}</h6>
                <p>{props.info[0]}</p>
                <p>{props.info[1]}</p>
            </div>
        </div>
    )
}