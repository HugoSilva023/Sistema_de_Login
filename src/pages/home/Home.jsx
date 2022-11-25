import React from 'react';

import * as S from "./Home.styles";
import GaleriaBooks from "../../components/galeriaBooks"
import Footer from '../../components/footer';
import Header from '../../components/header'

function Home() {   

    return (
        <S.Body>
            <div className="container pt-4">
                <Header />
                <GaleriaBooks />
                <Footer />
            </div>
        </S.Body>
    );
};

export default Home;