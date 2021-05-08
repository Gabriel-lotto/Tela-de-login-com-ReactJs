import React, { useState } from 'react';
import './login.css';
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Fill } from "react-icons/ri";
import { HiEye, HiEyeOff } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show); 
  }


  return (
    <div className="login">
      <div className="login-logo">
        <img src="https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png" alt="logo" />
      </div>

      <div className="login-right">
        <h1>Acessar App</h1>
        <div className="loginInputEmail">
          <HiOutlineMail />
          <input 
          type="text" 
          placeholder="Digite um Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="loginInputPassword">
          <RiLock2Fill />
          <input 
          type={show ? "text" : "password"}
          placeholder="Digite sua senha" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          />
          <div className="login-eye">
            {show ? (
              <HiEye 
                size={20}
                onClick={handleClick}
              />
            ) : (
              <HiEyeOff 
              size={20}
              onClick={handleClick}
              />
            )}
          </div>
        </div>
        <button  type="submit">
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