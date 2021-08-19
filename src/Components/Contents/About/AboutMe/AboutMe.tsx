import React from 'react';
import style from './AboutMeStyle.module.scss';
import myPhoto from '../../../../img/photoAbout.jpg'

export function AboutMe() {
    return (
        <div className={style.aboutMe}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>About Me</h2>
                    <span>About Me</span>
                </div>
                <div className={style.row}>
                    <div className={style.containerPhoto}>
                        <div className={style.photo}>
                            <img src={myPhoto} alt="/"/>
                        </div>
                    </div>
                    <div className={style.meContainer}>
                        <div className={style.meContent}>
                            <h3>
                                I am
                                <span> Roman Shaulinski</span>
                            </h3>
                            <p>I am a front-end developer. I can provide good code and design.
                                I also make the site more interactive with web animations.</p>
                            <ul>
                                <li><b>FullName</b>Roman Shaulinski</li>
                                <li><b>Age</b>25 years</li>
                                <li><b>Nationality</b>Belarus</li>
                                <li><b>Languages</b>Russian,English</li>
                                <li><b>Address</b>Minsk</li>
                            </ul>
                            <a href="https://drive.google.com/file/d/12Ek0OXfzkWEHQnsJwSiolR4QUAbOHtkz/view?usp=sharing">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}