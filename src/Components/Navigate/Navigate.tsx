import React from 'react';
import style from './NavigateStyle.module.scss';
import {Avatar} from './Avatar/Avatar';
import {Navbar} from './Navbar/Navbar';
import {Footer} from './Footer/Footer';

export function Navigate() {
    return (
        <div className={style.navigate} >
            <div className={style.container}>
                <Avatar/>
                <Navbar/>
                <Footer/>
            </div>
        </div>
    )
}