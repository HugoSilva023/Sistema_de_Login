import React from 'react';

import style from "./Home.module.css"
import GaleriaBooks from "../../components/galeriaBooks/GaleriaBooks"
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'

function Home() {   

    return (
        <div className={style.body}>
            <div className="container pt-4">
                <Header />
                <GaleriaBooks />
                <Footer />
            </div>
        </div>
    );
};

export default Home;