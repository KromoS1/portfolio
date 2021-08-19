import React, {useState} from 'react'
import style from '../ContactsStyle.module.scss'
import {FormContainer, ValuesType} from './Form';
import {sendForm} from '../../../../api/api';

export type StatusType = "idle" | "loading" | "successes"


export const GetInTouch = () => {

    const [status, setStatus] = useState<StatusType>("idle");

    const submit = (data: ValuesType) => {
        setStatus("loading");
        const status = sendForm(data);
        status.then(response => {

            response !== undefined && setStatus("successes");
        })
    }


    return (
        <div className={style.getInTouchBox}>
            <div className={style.boxForm}>
                <h4>Get In Touch</h4>
                <FormContainer onSubmit={submit} statusSend={status}/>
            </div>
        </div>
    )
}