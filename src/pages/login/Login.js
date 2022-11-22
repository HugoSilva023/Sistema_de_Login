import React from 'react';
import style from './Login.module.css';
import FormAuthentication from '../../components/formAuthentication/FormAuthentication';


function Login () {
    return (
        <div className={style.body}>
            <div className='container-flex'>
                <FormAuthentication />
            </div>
        </div>
    );
};

export default Login;