import React, { useContext, useState, useEffect } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';

import { AuthContext } from "../../contexts/Authenticator";

import * as S from "./GaleriaBooks.styles";
import api from "../../services/api";

function GaleriaBooks() {
  const [listBooks, setListBooks] = useState();
  const { page } = useContext(AuthContext);

  async function getDataBooks() {
    try {
      const { data } = await api.get(`/books?page=${page}`);
      const books = data.data;
      setListBooks(books);
      console.log(data)
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    getDataBooks();
  }, [page]);

  return (
    <>
      <S.Global>
        <S.Grid>
          {listBooks &&
            listBooks.map((book) => {
              return (

                <Dialog.Root>
                  <Dialog.Trigger asChild>

                    <S.Card>
                      <div className="row">
                        <span className="col-4">
                          <img
                            className="pt-3 ms-1"
                            src={book.imageUrl}
                            style={{ width: "80px" }}
                            alt="Capa do livro"
                          />
                        </span>
                        <span className="col-7">
                          <span className="ps-2">
                            <S.Title>{book.title}</S.Title>
                            <br />
                          </span>
                          <span className="ps-2">
                            <S.Author>{book.authors.join(", ")}</S.Author>
                            <br />
                          </span>
                          <span className="ps-2">
                            <S.Details>{book.pageCount} páginas</S.Details>
                            <br />
                          </span>
                          <span className="ps-2">
                            <S.Details>Editora {book.publisher}</S.Details>
                            <br />
                          </span>
                          <span className="ps-2">
                            <S.Details>Publicado em {book.published}</S.Details>
                          </span>
                        </span>
                      </div>
                    </S.Card>
                  
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <S.DialogDescription className="DialogDescription">{book.title}</S.DialogDescription>
                      <Dialog.Close>
                        botão close
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              );
            })}
        </S.Grid>
      </S.Global>
    </>
  );
}



export default GaleriaBooks;
