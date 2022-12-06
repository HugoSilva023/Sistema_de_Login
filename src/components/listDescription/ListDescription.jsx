import React from 'react'

import * as S from "./ListDescription.styles";

const ListDescription = ({ theBook }) => {
  return (
    <div>
        <S.ModalContainerInfo>
            <S.ModalTags>
            <br /> 
            <p>INFORMAÇÕES</p>
            <br />
            <p>Páginas</p>
            <p>Editora</p>
            <p>Publicação</p>
            <p>Idioma</p>
            <p>Titulo Original</p>
            <p>ISBN-10</p>
            <p>ISBN-13</p>
            </S.ModalTags>

            <S.ModalInfos>
            <br />
            <br />
            <br />
            <p>{theBook.pageCount} páginas</p>
            <p>Editora {theBook.publisher}</p>
            <p>{theBook.published}</p>
            <p>{theBook.language}</p>
            <p>{theBook.title}</p>
            <p>{theBook.isbn10}</p>
            <p>{theBook.isbn13}</p>
            </S.ModalInfos>
        </S.ModalContainerInfo>
    </div>
  )
}

export default ListDescription;