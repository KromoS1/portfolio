import React from 'react';
import style from './ResumeStyle.module.scss';
import {WorkContainer} from './Work/WorkCintainer';
import {EducationContainer} from './Education/EducationContainer';


export function Resume() {
    return (
        <div className={style.resumeBox}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>Resume</h2>
                    <span>Resume</span>
                </div>
                <WorkContainer/>
                <EducationContainer/>
            </div>
        </div>
    )
}
