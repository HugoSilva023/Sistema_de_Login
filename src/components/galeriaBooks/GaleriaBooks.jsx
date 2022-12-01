import React, { useContext, useState, useEffect } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';

import { AuthContext } from "../../contexts/Authenticator";

import * as S from "./GaleriaBooks.styles";
import api from "../../services/api";

function GaleriaBooks() {
  const [listBooks, setListBooks] = useState();
  const { page, theBook, setTheBook } = useContext(AuthContext);

  async function getDataBooks() {
    try {
      const { data } = await api.get(`/books?page=${page}`);
      const books = data.data;
      setListBooks(books);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    getDataBooks();
  }, [page]);

  function openDescriptionBook(book) {
    setTheBook(book)
    console.log(book)
  }

  console.log(listBooks)
  

  return (
    <>
      <S.Global>
        <S.Grid>
          {listBooks &&
            listBooks.map((book) => {
              return (

                <Dialog.Root>
                  <Dialog.Trigger asChild onClick={() => openDescriptionBook(book)} >

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
                    <S.DialogOverlay />
                    <S.DialogContent>
                      <S.DialogDescription>

                        <S.ModalGrid>

                          <S.ModalGridImage>
                            <S.ModalImg src={theBook.imageUrl} />
                          </S.ModalGridImage>

                          <S.ModalGridDescription>
                            <S.ModalTitle>{theBook.title}</S.ModalTitle>

                            <S.ModalAuthor>{theBook.authors && theBook.authors.join(", ")}</S.ModalAuthor>
                            <S.ModalContainerInfo>
                              <S.ModalTags>
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
                            <S.ModalResenha>
                              <S.ModalResenhaTitle>
                                <p>Resenha da Editora</p>
                              </S.ModalResenhaTitle>
                              <S.ModalResenhaContent>
                                <p>{theBook.description}</p>
                              </S.ModalResenhaContent>
                            </S.ModalResenha>
                          </S.ModalGridDescription>

                        </S.ModalGrid>

                      </S.DialogDescription>
                      <Dialog.Close> X </Dialog.Close>
                    </S.DialogContent>
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
