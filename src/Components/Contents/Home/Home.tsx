import React from "react";
import style from"./Home.module.css";

export function Home () {
    return (
        <div className={style.home}>
            <div className={style.greeting}>
                <h1>Hi, I am Roman Shavlinski</h1>
                <p>I am a front-end developer. I can provide clean code and good design.</p>
            </div>
        </div>
    )
}