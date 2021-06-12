import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export function Navbar (){
    return(
        <div className={style.navbar}>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/about"}>About Me</NavLink>
            <NavLink to={"/resume"}>Resume</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
        </div>
    )
}