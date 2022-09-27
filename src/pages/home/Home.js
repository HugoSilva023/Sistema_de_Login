import React from "react";
import style from "./Home.module.css"
import GaleriaBooks from "./GaleriaBooks.js"

function Home() {
    return (
        <div>
            <div className={style.body}>
                <GaleriaBooks />
            </div>
        </div>
    );
};

export default Home;