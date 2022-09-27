import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/Authenticator';
import style from './FormAuthentication.module.css';
import Logo from './images/Logo.png';


function FormAuthentication () {
    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("books@ioasys.com.br");
    const [password, setPassword] = useState("••••••••••••");

    function handleSubmit (e) {
        e.preventDefault();

        console.log("Submit", {email, password, authenticated})

        login(email, password);
    }

    return (
        <div className="container">
            <div class="row align-items-end">
                <div class='col-md-7 col-lg-5 col-sm-12'>
                    <form onSubmit={handleSubmit}>
                        <div className={style.boxLogo}>
                            <img src={Logo} alt="Ioasys logo"/>
                            <span className={style.book}>Books</span>
                        </div>
                        <div className={style.boxEmail}>
                            <div className={style.box}>
                                <label htmlFor='email'>
                                    <p className={style.titleBox}>Email</p>
                                    <div className={style.inputBox}>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}                                                
                                        />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className={style.boxPassword}>
                            <div className={style.box}>
                                <label htmlFor='password'>
                                    <p className={style.titleBox}>Senha</p>
                                    <div className={style.inputBox}>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button type="submit" className={style.buttonBox}>Entrar</button>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )
}

export default FormAuthentication;