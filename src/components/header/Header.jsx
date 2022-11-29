import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authenticator'
import React, { useContext } from 'react';

import * as S from "./Header.styles"

/** Importando as imagens */
import Logo from '../../pages/home/images/Logo.png';
import Chave from '../../pages/home/images/Chave.png';
import Seta from '../../pages/home/images/Seta.png';


const Header = () => {

    const navigate = useNavigate();
    const {name, setName} = useContext(AuthContext);

    

    const logout = () => {
        navigate("/");
        localStorage.removeItem("token");
        setName("")
    }

  return (
    <div>
        <div className="row justify-content-between pb-4 pt-4">
            <div className="col-5 display-block">
                <img src={Logo} alt="Ioasys logo"/>
                <span className="align-bottom d-xs-inline">
                    <S.LogoBook>Books</S.LogoBook>
                </span>
            </div>
            <div className="col-3">
                <span className="d-none d-md-block d-lg-inline">Bem vindo, {name}! </span>
                <S.LogoutButton onClick={logout}>
                    <S.IconBack src={Chave} alt="Ioasys logo"/>
                    <S.IconRight src={Seta} alt="Ioasys logo"/>
                </S.LogoutButton>
            </div>
        </div>
    </div>
  )
}

export default Header;