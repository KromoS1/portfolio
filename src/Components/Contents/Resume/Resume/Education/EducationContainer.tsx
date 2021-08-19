import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import style from '../ResumeStyle.module.scss';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {Education} from './Education';


export const EducationContainer = () => {
    const descIncubator = 'I really liked the courses of this company. Since i already had some knowledge base, i' +
        ' learned new information pretty quickly. In these courses, ' +
        'i learned the JavaScript programming language (TypeScript), React / Redux libraries. ' +
        'I also improved my knowledge of responsive layout.';
    const descITransition = "Before courses in ITransition, i had 1 year of independent study of C#/.Net. " +
        "Thanks to this knowledge, i got an internship at this company. For personal reasons, i could not finish them.";
    const descOrmedia = "The courses in this company were my first. The courses of this company did not really appeal to me," +
        " since their training was not aimed at memorizing the material by students. Nevertheless, i gained some initial experience.";
    const descMGEK = "Received a specialized secondary education in the specialty of an electrician for the maintenance of " +
        "power plants and substations.";

    return (
        <>
            <div className={style.smallTitleEd}>
                <span>
                    <i>
                        <FontAwesomeIcon icon={faGraduationCap}/>
                    </i>
                </span>
                <h4>Educational Qualifications</h4>
            </div>
            <div className={style.wrapperEd}>
                <Education year={'2021'} position={'Front-end developer (React/Redux/TypeScript)'} nameCompany={'IT-incubator'}
                           desc={descIncubator}/>
                <Education year={'2020'} position={'Back-end developer (C#/.Net core)'} nameCompany={'ITransition'} desc={descITransition}/>
                <Education year={"2019"} position={'Back-end developer (Java)'} nameCompany={'Ormedia'} desc={descOrmedia}/>
                <Education year={"2011 - 2015"} position={"Electrician"} nameCompany={"MGEK"} desc={descMGEK}/>
            </div>
        </>
    )
}