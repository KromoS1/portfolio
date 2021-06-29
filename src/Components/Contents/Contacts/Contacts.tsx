import React from "react";
import style from "./Contacts.module.css"
import {TypeInput} from "./TypeInput/TypeInput";
import {InfoContacts} from "./InfoCintacts/InfoContacts";

export function Contacts() {
    return (
        <div className={style.contactsBox}>
            <div className={style.titleContact}>
                <h1>CONTACT ME</h1>
            </div>
            <div className={style.informationBox}>
                <div className={style.inputBox}>
                    <div><h3>Get In Touch</h3></div>
                    <TypeInput nameInput={"name"}/>
                    <TypeInput nameInput={"email"}/>
                    <TypeInput nameInput={"subject"}/>
                    <TypeInput nameInput={"message"}/>
                    <div className={style.sendMail}>
                        <button>SEND MAIL</button>
                    </div>
                </div>
                <div className={style.information}>
                    <InfoContacts typeInfo={"phone"}/>
                    <InfoContacts typeInfo={"email"}/>
                    <InfoContacts typeInfo={"address"}/>
                </div>
            </div>
        </div>
    )
}