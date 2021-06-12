import React from "react";
import style from "./AboutMe.module.css"

export function AboutMe () {
    return (
        <div className={style.aboutMe}>
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
            <div className={style.services}>
                <div className={style.heading}><h1>Services</h1></div>
                <div className={style.blocksServices}>
                    <div className={style.block}>
                        <div>icon</div>
                        <div><h3>Web Design</h3></div>
                        <div>description</div>
                    </div>
                    <div className={style.block}>
                        <div>icon</div>
                        <div><h3>Web Developer</h3></div>
                        <div>description</div>
                    </div>
                    <div className={style.block}>
                        <div>icon</div>
                        <div><h3>Mobile developer</h3></div>
                        <div>description</div>
                    </div>
                </div>
            </div>
        </div>
    )
}