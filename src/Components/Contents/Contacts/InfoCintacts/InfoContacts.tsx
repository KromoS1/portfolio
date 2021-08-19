import React from 'react';
import style from '../ContactsStyle.module.scss'
import {Contact} from './Contact';
import {faPhoneAlt,faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

export function InfoContacts() {
    return (
        <div className={style.infoBox}>
           <div className={style.contacts}>
               <Contact title={"Phone"} icon={faPhoneAlt} info={['+375-29-748-58-75']}/>
               <Contact title={"Email"} icon={faEnvelope} info={['krakenHRI@mail.ru',"krakenHRI@yandex.ru"]}/>
               <Contact title={"Address"} icon={faMapMarkerAlt} info={['38/1 Suhareuskaya Street, Minsk, Belarus']}/>
           </div>
        </div>
    )
}
