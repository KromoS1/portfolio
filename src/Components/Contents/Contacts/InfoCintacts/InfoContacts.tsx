import React from "react";
import style from "./InfoContacts.module.css"

type PropsType = {
    typeInfo: string
}

export function InfoContacts(props: PropsType) {
    switch (props.typeInfo) {
        case "phone":
            return (
                <div className={style.informationBox}>
                    <div className={style.iconInfo}>icon</div>
                    <div className={style.contactsMe}>
                        <h3>Phone</h3>
                        <div className={style.paragraph}><p>+375-29-748-58-75</p></div>
                    </div>
                </div>
            )
        case "email":
            return (
                <div className={style.informationBox}>
                    <div className={style.iconInfo}>icon</div>
                    <div className={style.contactsMe}>
                        <h3>Email</h3>
                        <div className={style.paragraph}>
                            <p>krakenhri@mail.ru</p>
                            <p>krakenhri@yandex.ru</p>
                        </div>
                    </div>
                </div>
            )
        case "address":
            return (
                <div className={style.informationBox}>
                    <div className={style.iconInfo}>icon</div>
                    <div className={style.contactsMe}>
                        <div><h3>Address</h3></div>
                        <div className={style.paragraph}><p>38/1 Sukharevskaya, Minsk, Belarus</p></div>
                    </div>
                </div>
            )
        default:
            return <div>Error</div>
    }
}
