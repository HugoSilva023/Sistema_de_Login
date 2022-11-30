import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Authenticator";
import { useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../../services/api";

import * as S from "./FormAuthentication.styles";
import Logo from "../../pages/login/images/Logo.png";

function FormAuthentication() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("desafio@ioasys.com.br");
  const [password, setPassword] = useState("12341234");
  const [msg, setMsg] = useState(null);
  const { setName } = useContext(AuthContext);

  const Login = async () => {
    const userData = {
      email,
      password,
    };

    async function getDataLogin() {
      try {
        const { data, headers } = await api.post("/auth/sign-in", userData);
        const { authorization } = headers;

        setAuthToken(authorization);

        if (authorization) {
          navigate("/Home");
          localStorage.setItem("token", authorization);
        }

        setName(data.name);
      } catch (error) {
        const resp = JSON.parse(error.request.response);
        const { message } = resp.errors;
        setMsg(message);
      }
    }
    getDataLogin();
  };

  function handleSubmit(e) {
    e.preventDefault();

    Login();
  }

  return (
    <S.Global>
        <div className="container">
            <div className="row align-items-end">
                <div className="col-md-7 col-lg-5 col-sm-12">
                <form onSubmit={handleSubmit}>
                    <S.BoxLogo>
                        <img src={Logo} alt="Ioasys logo" />
                        <S.Book>Books</S.Book>
                    </S.BoxLogo>
                    <S.BoxEmail>
                        <S.Box>
                            <label htmlFor="email">
                                <S.TitleBox>Email</S.TitleBox>
                                <S.InputBox>
                                    <S.Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </S.InputBox>
                            </label>
                        </S.Box>
                    </S.BoxEmail>
                    <S.BoxPassword>
                        <S.Box>
                            <label htmlFor="password">
                                <S.TitleBox>Senha</S.TitleBox>
                                <S.InputBox>
                                    <S.Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <S.Button>Entrar</S.Button>
                                </S.InputBox>
                            </label>
                        </S.Box>
                    </S.BoxPassword>
                    {msg && (
                    <S.MsgBox>
                        <S.Box>{msg}</S.Box>
                    </S.MsgBox>
                    )}
                </form>
                </div>
            </div>
        </div>
    </S.Global>
  );
}

export default FormAuthentication;