import {FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";


const  Login = () => {


    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados: ", userName, " - ", password)
        console.log("Credentials => ", userName, " ", password)
    }


  return (
    <div className="container">
        <form  onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>

            <div className="input-field">
                <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className="icon" />
            </div>

            <div className="input-field">
                <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label htmlFor="" className="">
                    <input type="checkbox"/>
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button className="">Entrar</button>

            <div className="signup-link">
                <p className="">
                    Não tem uma conta? <a href="#" className="">Registrar</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login
