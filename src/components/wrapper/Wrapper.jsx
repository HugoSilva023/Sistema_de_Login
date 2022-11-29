import React from 'react'
import * as S from "./Wrapper.styles";

const Wrapper = ({ children }) => {
  return (
    <S.Container>
        {children}
    </S.Container>
  )
}

export default Wrapper