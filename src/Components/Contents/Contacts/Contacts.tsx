import React from 'react';
import style from './ContactsStyle.module.scss'
import {GetInTouch} from './TypeInput/GetInTouch';
import {InfoContacts} from './InfoCintacts/InfoContacts';

export function Contacts() {
    return (
        <div className={style.contactsBox}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>Contact me</h2>
                    <span>Contact Me</span>
                </div>
                <div className={style.row}>
                    <GetInTouch/>
                    <InfoContacts />
                </div>
            </div>
        </div>
    )
}