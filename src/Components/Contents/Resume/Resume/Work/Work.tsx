import React from "react";
import style from "./Work.module.css";

export function Work() {
    return (
        <div className={style.organization}>
            <div className={style.dateWorking}>2020</div>
            <div className={style.organizationDescription}>
                <h2>Frontend web developer</h2>
                <h3>abc Company</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur
                    consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
                    Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
            </div>
        </div>
    )
}