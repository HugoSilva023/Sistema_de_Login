import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/Authenticator'
import { useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../../services/api'

import style from './FormAuthentication.module.css';
import Logo from './images/Logo.png';
import styled from 'styled-components';



function FormAuthentication () {

    const navigate = useNavigate();

    const [email, setEmail] = useState("desafio@ioasys.com.br");
    const [password, setPassword] = useState("12341234");
    const { setName } = useContext(AuthContext);
    
    const Login = async () => {

        const userData = {
            email,
            password,
        }
        
        async function getDataLogin() {

            try {

                const {data, headers} = await api.post('/auth/sign-in', userData);
             //   const {name} = data;
                const {authorization} = headers;

                setAuthToken(authorization);
                

                if (authorization) {
                    navigate("/Home");
                    localStorage.setItem("token", authorization);
                }

                setName(data.name);

            } catch (error) {
                console.log(error)
                alert(`Senha e/ou email incorretos`)
            }
        }        
        getDataLogin()
    }

    function handleSubmit (e) {
        e.preventDefault();

        Login();
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
                                        <Button>Entrar</Button>
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

// styles-components
//Component Button
const Button = styled.button`
    background: #FFFFFF;
    border-radius: 44px;
    border: none;
    padding: 8px 20px;
    margin-left: auto;

    font-family: 'Heebo Medium';
    font-size: 16px;
    line-height: 20px; 
    color: #B22E6F;
`;

export default FormAuthentication;