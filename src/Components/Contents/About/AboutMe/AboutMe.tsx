import React from "react";
import style from "./AboutMe.module.css";

export function AboutMe() {
    return (
        <>
            <div className={style.heading}><h1>About Me</h1></div>
            <div className={style.info}>
                <div className={style.photo}>photo</div>
                <div className={style.data}>
                    <h2>Roman Shavlinski</h2>
                    <p>I am a front-end developer. I can provide clean code and good design.</p>
                    <div className={style.myData}>
                        <span>FullName : Roman Shavlinski</span>
                        <span>Age : 25 Years</span>
                        <span>Nationality : Belarus</span>
                        <span>Languages : Russian,English</span>
                        <span>Address : Minsk</span>
                    </div>
                </div>
            </div>
        </>
    )
}