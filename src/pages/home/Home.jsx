import React from "react";

import * as S from "./Home.styles";
import GaleriaBooks from "../../components/galeriaBooks";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";

function Home() {
  return (
    <S.Body>
        {/* <S.Cards> */}
          <Wrapper>
              <Header />            
              <GaleriaBooks />
              <Footer />

          </Wrapper>
        {/* </S.Cards> */}
    </S.Body>
  );
}

export default Home;
