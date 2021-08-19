import React from 'react'
import style from '../ResumeStyle.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {Work} from './Work';

export const WorkContainer = () => {
    const DescWorkFreelance = 'I take part in the creation of an application for teaching\n' +
        'programming. Developed a login page, modal windows,\n' +
        'tests, menus, design. Used the following developer\n' +
        'technologies: React,Redux,ReduxThunk,RestApi,Axios,\n' +
        'ReduxForm,Formik,MaterialUI,SCSS etc. Using unit\n' +
        'tests, I checked the correctness of the code, and using\n' +
        'Storybook, individual application modules. For more\n' +
        'control of the code. I use TypeScript';

    const DescWorkSbyt = 'Checking the connection diagrams of electric energy\n' +
        'metering devices of legal entities. Drawing up acts on\n' +
        'unaccounted consumption of electrical energy.\n' +
        'Maintenance of software for metering devices.';
    return (
        <>
            <div className={style.smallTitleWork}>
                    <span>
                        <i>
                            <FontAwesomeIcon icon={faBriefcase}/>
                        </i>
                    </span>
                <h4>Working Experience</h4>
            </div>
            <div className={style.wrapperWork}>
                <Work year={'2021 - Present'} position={'Front-end developer'} nameCompany={'Freelance'}
                      desc={DescWorkFreelance}/>
                <Work year={'2015 - 2021'} position={'Electrician'} nameCompany={'MinskEnergy'} desc={DescWorkSbyt}/>
            </div>
        </>
    )
}