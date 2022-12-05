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

    const userName = name.slice(0, 11);

    const logout = () => {
        navigate("/");
        localStorage.removeItem("token");
        setName("")
    }

  return (
    <S.Grid>
        <S.AreaLogo>
            <img className='pb-2' src={Logo} alt="Ioasys logo"/>
            <S.LogoBook>Books</S.LogoBook>
        </S.AreaLogo>
        <S.AreaLogout>
            <S.Reception> Bem vindo, <S.Name>{userName}</S.Name>! </S.Reception>
            <S.LogoutButton onClick={logout}>
                <S.IconBack src={Chave} alt="Ioasys logo"/>
                <S.IconRight src={Seta} alt="Ioasys logo"/>
            </S.LogoutButton>
        </S.AreaLogout>
    </S.Grid>
  )
}

export default Header;