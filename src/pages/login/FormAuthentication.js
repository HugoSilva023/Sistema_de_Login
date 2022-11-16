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

    const {userId, setUserID} = useContext(AuthContext);
    const {name, setName} = useContext(AuthContext);
    const {birthDate, setBirthDate} = useContext(AuthContext);
    const {gender, setGender} = useContext(AuthContext);

    const url = 'https://books.ioasys.com.br/api/v1/auth/sign-in';
    
    const Login = async () => {

        const userData = {
            email,
            password,
        }
        
        async function getDataLogin() {

            try {

                const {data, headers} = await api.post('/auth/sign-in', userData);

                const {name} = data;
                const {authorization} = headers;

                setAuthToken(authorization);
                

                if (authorization) {
                    navigate("/Home");
                    localStorage.setItem("token", authorization);
                }

                setUserID(data.id);
                setName(data.name);
                setBirthDate(data.birthdate);
                setGender(data.gender);

            } catch (error) {
                console.log(error)
            }
        }        
        getDataLogin()
    }

/**     async function getDataLogin() {
            
            const response = await fetch(url, {
                method: "POST",
                body:JSON.stringify(userData),
                headers: {
                    "Content-type": "application/json",
                },
            });

            const data = await response.json();

            
            console.log(data);
            console.log(data.name);
        }

        getDataLogin()
        
    }
*/  

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