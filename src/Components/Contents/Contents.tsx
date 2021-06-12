import React from "react";
import {Route} from "react-router-dom";
import style from "./Contents.module.css";
import {Home} from "./Home/Home";
import {AboutMe} from "./About/AboutMe";
import {Resume} from "./Resume/Resume";
import {Contacts} from "./Contacts/Contacts";

export function Contents() {
    return (
        <div className={style.contents}>
            <Route path={"/home"} render={() => <Home/>}/>
            <Route path={"/about"} render={() => <AboutMe/>}/>
            <Route path={"/resume"} render={() => <Resume/>}/>
            <Route path={"/contacts"} render={() => <Contacts/>}/>
        </div>
    )
}