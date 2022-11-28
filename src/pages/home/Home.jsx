import React from "react";

import * as S from "./Home.styles";
import GaleriaBooks from "../../components/galeriaBooks";
import Footer from "../../components/footer";
import Header from "../../components/header";

function Home() {
  return (
    <S.Body>
        <S.Cards className="">
          <Header />
          <GaleriaBooks />
          <Footer />
        </S.Cards>
    </S.Body>
  );
}

export default Home;
