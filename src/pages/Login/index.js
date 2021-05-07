import React from 'react';
import './login.css';
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Fill } from "react-icons/ri";
// eslint-disable-next-line no-unused-vars
function Login () {
  return (
    <div className="login">
      <div className="login-logo">
        <img src="https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png" alt="logo" />
      </div>

      <div className="login-right">
        <h1>Acessar App</h1>
        <div className="loginInputEmail">
          <HiOutlineMail />
          <input type="text" placeholder="Digite um Email" />
        </div>

        <div className="loginInputPassword">
          <RiLock2Fill />
          <input type="text" placeholder="Digite sua senha" />
        </div>
        <button type="submit">
          Entrar
        </button>
        <h4>Não tenho conta</h4>
        <button type="submit">
          Cadastrar
        </button>
      </div>
    </div>
  )
}
export default Login;