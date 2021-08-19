import React from 'react';
import {Service} from './Service';
import style from './ServicesStyle.module.scss';
import {faPalette, faMobileAlt, faCode} from '@fortawesome/free-solid-svg-icons'

export function Services() {
    const DescDeign = 'I provide quality web design services using the latest and proven libraries.';
    const DescDev = 'I provide services for the development of SPA applications using React/Redux/TypeScript';
    const DescMobile = 'I will help you develop mobile applications, as well as make a mobile version of existing applications.';


    return (
        <div className={style.services}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>Services</h2>
                    <span>Services</span>
                </div>
                <div className={style.servicesContainer}>
                    <div className={style.row}>
                        <Service title={'Web Design'} desc={DescDeign} icon={faPalette}/>
                        <Service title={'Web Development'} desc={DescDev} icon={faCode}/>
                        <Service title={'Mobile Application'} desc={DescMobile} icon={faMobileAlt}/>
                    </div>
                </div>
            </div>
        </div>
    )
}