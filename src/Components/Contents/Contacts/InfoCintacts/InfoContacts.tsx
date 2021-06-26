import React from "react";
import style from "./InfoContacts.module.css"

type PropsType = {
    typeInfo: string
}

export function InfoContacts(props: PropsType) {
    switch (props.typeInfo) {
        case "phone":
            return (
                <div className={style.informationPhone}>
                    <div className={style.iconInfo}>icon</div>
                    <div className={style.phoneInfo}>
                        <h3>Phone</h3>
                        <p>+375-29-748-58-75</p>
                    </div>
                </div>
            )
        case "email":
            return (
                <div className={style.informationEmail}>
                    <div className={style.iconInfo}>icon</div>
                    <div className={style.emailInfo}>
                        <h3>Email</h3>
                        <p>krakenhri@mail.ru</p>
                        <p>krakenhri@yandex.ru</p>
                    </div>
                </div>
            )
        case "address":
            return (
                <div className={style.informationAddress}>
                    <div className={style.iconInfo}>icon</div>
                    <div className={style.addressInfo}>
                        <div><h3>Address</h3></div>
                        <div className={style.address}><p>38/1 Sukharevskaya, Minsk, Belarus</p></div>
                    </div>
                </div>
            )
        default:
            return <div>Error</div>
    }
}