import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../../contexts/Authenticator'
import { useNavigate } from 'react-router-dom';

import style from "./GaleriaBooks.module.css"
import api from "../../services/api";

/** Importando as imagens */
import Logo from './images/Logo.png';
import Chave from './images/Chave.png';
import Seta from './images/Seta.png';
import Paginacao from './images/Paginacao.png'


function GaleriaBooks () {

    const navigate = useNavigate();

    const [listBooks, setListBooks] = useState();
    const {name, setName} = useContext(AuthContext);

    async function getDataBooks() {
        try {
            const {data} = await api.get('/books?page=1');
            const books = data.data;
            setListBooks(books);
            console.log(listBooks);
            console.log(books);
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {
        getDataBooks();
    },[])

    console.log(name);
    
    const logout = () => {
        navigate("/");
        localStorage.removeItem("token");
    }

    return (
        <div className="container pt-4">


            <div className="row justify-content-between pb-4">
                <div className="col-5 display-block">
                    <img src={Logo} alt="Ioasys logo"/>
                    <span className="align-bottom d-xs-inline">
                        <span className={style.book}>Books</span>
                    </span>
                </div>
                <div className="col-3">
                    <span className="d-none d-md-block d-lg-inline">Bem vindo, {name}! </span>
                    <button className={style.botao} onClick={logout}>
                        <img className={style.iconeChave} src={Chave} alt="Ioasys logo"/>
                        <img className={style.iconeSeta} src={Seta} alt="Ioasys logo"/>
                    </button>
                </div>
            </div>
            
            <div className="row">
            {
                listBooks && 
                    listBooks.map(
                        (book) => {
                            return <>
                                    <div className="col-lg-3 pt-3">
                                        <button className={style.cards}>
                                            <div className="row">
                                                <span className="col-4">
                                                    <img className="pt-3 ms-1" src={book.imageUrl} style={{width: "80px"}}/>
                                                </span>
                                                <span className="col-7">
                                                    <span className="ps-2">
                                                        <span className={style.titulo}>{book.title}</span><br/>
                                                    </span>
                                                    <span className="ps-2">
                                                        <span className={style.autor}>{book.authors}</span><br/>
                                                    </span>
                                                    <span className="ps-2">
                                                    <span className={style.detalhes}>{book.pageCount} páginas</span><br/>
                                                    </span>
                                                    <span className="ps-2">
                                                        <span className={style.detalhes}>Editora {book.publisher}</span><br/>
                                                    </span>
                                                    <span className="ps-2">
                                                        <span className={style.detalhes}>Publicado em {book.published}</span>
                                                    </span>
                                                </span> 
                                            </div>
                                        </button>
                                    </div>
                                </>
                        }
                    )
            }
            </div>


{/**         <div className="row">
                <div className="col-lg-3 pt-3">
                    <button className={style.cards}>
                        <div className="row">
                            <span className="col-4">
                                <img className="pt-3 ms-1" src={Book_CrossingTheChasm} alt="Book Crossing The Chasm"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>{title}</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Geoffrey A. Moore</span><br/>
                                </span>
                                <span className="ps-2">
                                  <span className={style.detalhes}>150 páginas</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.detalhes}>Editora Loyola</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.detalhes}>Publicado em 2020</span>
                                </span>
                            </span> 
                        </div>
                    </button>
                </div>
                <div className="col-lg-3 pt-3">
                    <button className={style.cards}>
                        <div className="row">
                            <span className="col-4">
                                <img className="pt-3 ms-1" src={Book_DontMakeMeThink} alt="Book Don't Make me Think"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>Don't Make me Think</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Steve Krug</span><br/>
                                </span>
                                <span className="ps-2">
                                  <span className={style.detalhes}>150 páginas</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.detalhes}>Editora Loyola</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.detalhes}>Publicado em 2020</span>
                                </span>
                            </span> 
                        </div>
                    </button>
                </div>
                <div className="col-lg-3 pt-3">
                    <button className={style.cards}>
                        <div className="row">
                            <span className="col-4">
                                <img className="pt-3 ms-1" src={Book_TheDesignOfEverydayThings} alt="The Design of Everyday Things"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>The Design of</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.titulo}>Everyday Things</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Don Norman</span><br/>
                                </span>
                                <span className="ps-2">
                                  <span className={style.detalhes}>150 páginas</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.detalhes}>Editora Loyola</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.detalhes}>Publicado em 2020</span>
                                </span>
                            </span> 
                        </div>
                    </button>
                </div>
                <div className="col-lg-3 pt-3">
                    <button className={style.cards}>
                        <div className="row">
                            <span className="col-4">
                                <img className="pt-3 ms-1" src={Book_Sprint} alt="Sprint"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>Sprint</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Jake Knapp</span><br/>
                                </span>
                                <span className="ps-2">
                                  <span className={style.detalhes}>150 páginas</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.detalhes}>Editora Loyola</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.detalhes}>Publicado em 2020</span>
                                </span>
                            </span> 
                        </div>
                    </button>
                </div>
            </div>
*/}

            <div className="pt-3 pb-5">
                <span className={style.rodape}>
                    <span className="ps-5">Página 1 de 100</span>
                    <span className="ps-3">
                        <button className={style.paginaAnterior}>
                            <img className={style.iconeChave} src={Paginacao} alt="Pagina Anterior"/>
                        </button>
                    </span>
                    <span className="ps-1">
                        <button className={style.proximaPagina}>
                            <img className={style.iconeChave} src={Paginacao} alt="Proxima Pagina"/>
                        </button>
                    </span>
                </span>
            </div>

        </div>
    )
}

export default GaleriaBooks;