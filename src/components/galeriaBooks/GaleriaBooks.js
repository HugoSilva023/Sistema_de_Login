import { useState, useEffect } from "react";


import * as S from "./GaleriaBooks.styles"
import api from "../../services/api";




function GaleriaBooks () {



    const [listBooks, setListBooks] = useState();

    async function getDataBooks() {
        try {
            const {data} = await api.get('/books?page=1');
            const books = data.data;
            setListBooks(books);
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {
        getDataBooks();
        console.log(listBooks);
    },[])
    
    return (
        <>
            <S.Global>
                <div className="row">
                    {
                        listBooks && 
                            listBooks.map(
                                (book) => {
                                    return <>
                                            <div className="col-lg-3 pt-3">
                                                <S.Card>
                                                    <div className="row">
                                                        <span className="col-4">
                                                            <img className="pt-3 ms-1" src={book.imageUrl} style={{width: "80px"}} alt="Capa do livro"/>
                                                        </span>
                                                        <span className="col-7">
                                                            <span className="ps-2">
                                                                <S.Title>{book.title}</S.Title><br/>
                                                            </span>
                                                            <span className="ps-2">
                                                                <S.Author>{book.authors.join(", ")}</S.Author><br/>
                                                            </span>
                                                            <span className="ps-2">
                                                                <S.Details>{book.pageCount} páginas</S.Details><br/>
                                                            </span>
                                                            <span className="ps-2">
                                                                <S.Details>Editora {book.publisher}</S.Details><br/>
                                                            </span>
                                                            <span className="ps-2">
                                                                <S.Details>Publicado em {book.published}</S.Details>
                                                            </span>
                                                        </span> 
                                                    </div>
                                                </S.Card>
                                            </div>
                                        </>
                                }
                            )
                    }
                </div> 
            </S.Global>
        </>
    )
}

export default GaleriaBooks;