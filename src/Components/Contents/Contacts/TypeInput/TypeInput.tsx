import React from "react";
import style from "./TypeInput.module.css";

type PropsType = {
    nameInput: string
}

export function TypeInput(props: PropsType) {
    switch (props.nameInput){
        case "name":
            return (
                <div className={style.name}>
                    <p>Enter your {props.nameInput}*</p>
                    <input type="text"/>
                </div>
            )
        case "email":
            return (
                <div className={style.email}>
                    <p>Enter your {props.nameInput}*</p>
                    <input type="text"/>
                </div>
            )
        case "subject":
            return (
                <div className={style.subject}>
                    <p>Enter your {props.nameInput}*</p>
                    <input type="text"/>
                </div>
            )
        case "message":
            return (
                <div className={style.message}>
                    <p>Enter your {props.nameInput}*</p>
                    <input type="text"/>
                </div>
            )
        default:
            return <div>Error</div>
    }

}

