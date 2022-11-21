import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Authenticator'

import * as S from "./Footer.styles"
import Paginacao from '../../pages/home/images/Paginacao.png'

const Footer = () => {

    const {page, setPage} = useContext(AuthContext);

  return (
    <div>
        <div className="pt-3 pb-5">
            <S.Footer>
                <span className="ps-5">{`Pagina ${page} de 50`}</span>
                <span className="ps-3">
                    <S.PageControl
                        onClick={() => { page !== 1 ? setPage(page - 1) : console.log("error")}}
                        transform={"matrix(-1, 0, 0, 1, 0, 0)"}
                    >
                        <S.IconsKeys src={Paginacao} alt="Pagina Anterior"/>
                    </S.PageControl>
                </span>
                <span className="ps-1">
                    <S.PageControl
                        onClick={() => { page < 50 ? setPage(page + 1) : console.log("error")}}
                        transform={"matrix(1, 0, 0, 1, 0, 1)"}
                    >
                        <S.IconsKeys src={Paginacao} alt="Proxima Pagina"/>
                    </S.PageControl>
                </span>
            </S.Footer>
        </div>
    </div>
  )
}

export default Footer