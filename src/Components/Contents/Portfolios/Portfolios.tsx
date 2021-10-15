import React from 'react'
import style from './PortfoliosStyle.module.scss'
import {Project} from './Project';
import sn from '../../../img/sn.jpg';
import td from '../../../img/td.jpg';
import lc from '../../../img/LC.jpg';

export const Portfolios = () => {

    const descSN = "My project on the social network. The project is under development. There is an opportunity to go to your profile. Two sections are already ready. A profile page where you can view your data and also post. On the second page of the list of users, it is possible to subscribe to other users, and also, by clicking on the avatar, go to their profiles. (In Progress)";

    const descTD = "To-do list. A project in which it is possible to log into your account. It is possible to create lists of cases, edit them, sort and delete them. You can create tasks, mark their progress, edit and delete. (In Progress)";

    const descLP = "This project was created for self-study. The user can create question and answer cards and check himself against these questions. It is possible to view cards of other users."

    return (
        <div className={style.projectsBox}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>Portfolio</h2>
                    <span>Portfolio</span>
                </div>
                <div className={style.row}>
                    <Project nameProject={"Social-Network"} description={descSN} img={sn} urlGHPage={''}/>
                    <Project nameProject={"Todo List"} description={descTD} img={td}
                             urlGHPage={'https://kromos1.github.io/TodoList/'}/>
                    <Project nameProject={"Learning Cards"} description={descLP}
                             img={lc} urlGHPage={'https://kromos1.github.io/fryday-erik-roma-pasha/'}/>
                </div>
            </div>
        </div>
    )
}
