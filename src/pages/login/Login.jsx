import React from 'react';
import * as S from "./Login.styles";
import FormAuthentication from '../../components/formAuthentication/FormAuthentication';


function Login () {
    return (
        <S.Body>
            <div className='container-flex'>
                <FormAuthentication />
            </div>
        </S.Body>
    );
};

export default Login;