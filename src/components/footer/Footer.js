import React from 'react'

import * as S from "./Footer.styles"
import Paginacao from '../../pages/home/images/Paginacao.png'

const Footer = () => {
  return (
    <div>
        <div className="pt-3 pb-5">
            <S.Footer>
                <span className="ps-5">Página 1 de 100</span>
                <span className="ps-3">
                    <S.PageControl transform={"matrix(-1, 0, 0, 1, 0, 0)"}>
                        <S.IconsKeys src={Paginacao} alt="Pagina Anterior"/>
                    </S.PageControl>
                </span>
                <span className="ps-1">
                    <S.PageControl transform={"matrix(1, 0, 0, 1, 0, 0)"}>
                        <S.IconsKeys src={Paginacao} alt="Proxima Pagina"/>
                    </S.PageControl>
                </span>
            </S.Footer>
        </div>
    </div>
  )
}

export default Footer