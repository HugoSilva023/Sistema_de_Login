import style from "./GaleriaBooks.module.css"
import Logo from './images/Logo.png';
import Chave from './images/Chave.png';
import Seta from './images/Seta.png';
import Book_CrossingTheChasm from './images/Book_CrossingTheChasm.png'
import Book_DontMakeMeThink from './images/Book_DontMakeMeThink.png'
import Book_TheDesignOfEverydayThings from './images/Book_TheDesignOfEverydayThings.png'
import Book_Sprint from './images/Book_Sprint.png'
import Book_ChangeByDesign from './images/Book_ChangeByDesign.png'
import Book_WebDesign101 from './images/Book_WebDesign101.png'
import Book_CreativeSelection from './images/Book_CreativeSelection.png'
import Book_ThePowerOfHabit from './images/Book_ThePowerOfHabit.png'
import Book_TheMakingOfAManager from './images/Book_TheMakingOfAManager.png'
import Book_Hooked from './images/Book_Hooked.png'
import Book_TheUnknownBook from './images/Book_TheUnknownBook.png'
import Paginacao from './images/Paginacao.png'




function GaleriaBooks () {
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
                    <span className="d-none d-md-block d-lg-inline">Bem vindo, Name! </span>
                    <button className={style.botao}>
                        <img className={style.iconeChave} src={Chave} alt="Ioasys logo"/>
                        <img className={style.iconeSeta} src={Seta} alt="Ioasys logo"/>
                    </button>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 pt-3">
                    <button className={style.cards}>
                        <div className="row">
                            <span className="col-4">
                                <img className="pt-3 ms-1" src={Book_CrossingTheChasm} alt="Book Crossing The Chasm"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>Crossing the Chasm</span><br/>
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


            <div className="row">
                <div className="col-lg-3 pt-3">
                    <button className={style.cards}>
                        <div className="row">
                            <span className="col-4">
                                <img className="pt-3 ms-1" src={Book_ChangeByDesign} alt="Change By Design"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>Change By Design</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Tim Brown</span><br/>
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
                                <img className="pt-3 ms-1" src={Book_WebDesign101} alt="Web Design 101"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>Web Design 101</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Mary Johnson,</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>William Pitt</span><br/>
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
                                <img className="pt-3 ms-1" src={Book_CreativeSelection} alt="Creative Selection"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>Creative Selection</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Ken Kocienda</span><br/>
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
                                <img className="pt-3 ms-1" src={Book_ThePowerOfHabit} alt="The Power of Habit"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>The Power of Habit</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Charles Duhigg</span><br/>
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


            <div className="row">
                <div className="col-lg-3 pt-3">
                    <button className={style.cards}>
                        <div className="row">
                            <span className="col-4">
                                <img className="pt-3 ms-1" src={Book_TheMakingOfAManager} alt="The Making of a Manager"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>The Making of a</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.titulo}>Manager</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Julie Zhuo</span><br/>
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
                                <img className="pt-3 ms-1" src={Book_Hooked} alt="Hooked"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>Hooked</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Nir Eyal</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Ryan Hoover</span><br/>
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
                                <img className="pt-3 ms-1" src={Book_TheUnknownBook} alt="The Unknown Book"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>The Unknown Book</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Unknown Author</span><br/>
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
                                <img className="pt-3 ms-1" src={Book_Hooked} alt="Hooked"/>
                            </span>
                            <span className="col-7">
                                <span className="ps-2">
                                    <span className={style.titulo}>Hooked</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Nir Eyal</span><br/>
                                </span>
                                <span className="ps-2">
                                    <span className={style.autor}>Ryan Hoover</span><br/>
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