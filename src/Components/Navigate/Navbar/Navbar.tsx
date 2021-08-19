import React from "react";
import { NavLink } from "react-router-dom";
import style from "../NavigateStyle.module.scss";

export function Navbar (){
    return(
        <div className={style.navbar}>
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink to={"about"}>About Me</NavLink>
            <NavLink to={"resume"}>Resume</NavLink>
            <NavLink to={"projects"}>Portfolios</NavLink>
            <NavLink to={"contacts"}>Contacts</NavLink>
        </div>
    )
}
