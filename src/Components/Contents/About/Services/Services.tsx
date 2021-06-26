import React from "react";
import { Service } from "./Service/Service";
import style from "./Services.module.css";

export function Services() {
    return (
        <>
            <div className={style.services}>
                <div className={style.heading}><h1>Services</h1></div>
                <div className={style.blocksServices}>
                    <Service/>
                    <Service/>
                    <Service/>
                </div>
            </div>
        </>
    )
}