import React from "react";
import {Route} from "react-router-dom";
import style from "./Contents.module.css";
import {Home} from "./Home/Home";
import {AboutMePage} from "./About/AboutMePage";
import {ResumePage} from "./Resume/ResumePage";
import {Contacts} from "./Contacts/Contacts";

export function Contents() {
    return (
        <div className={style.contents}>
            <Route exact path={"/"} render={() => <Home/>}/>
            <Route path={"/about"} render={() => <AboutMePage/>}/>
            <Route path={"/resume"} render={() => <ResumePage/>}/>
            <Route path={"/contacts"} render={() => <Contacts/>}/>
        </div>
    )
}