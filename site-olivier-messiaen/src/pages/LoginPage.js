import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from './pagesStyle/LoginPage.module.css'


export default function Login(){

    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const navigate = useNavigate()

    function autenticar(){
        if(user == null || pass == null){
            alert("Os campos não podem ficar vazios.")
        }else if(user == "admin" && pass == "admin"){
            navigate("/admin/obras")
        }else{
            alert("Credenciais incorretas.")
        }
    }

    return(
        <div className={Style.content}>
            <div className={Style.container}>

            <h1>Login</h1>
            <form>

                <div>
                    <div className={Style.descricaoCampo}>
                        <label><strong>Usuário:</strong></label>
                    </div>
                    <div  className={Style.campo}>
                        <input onChange={(e) => setUser(e.target.value)} type="text" name="user" id="user"/>         
                    </div>
                </div>

                <div>
                    <div className={Style.descricaoCampo}>
                        <label><strong>Senha:</strong></label>
                    </div>
                    <div className={Style.campo}>
                        <input onChange={(e) => setPass(e.target.value)} type="password" name="pass" id="pass"/>
                    </div>
                </div>

                <button className={Style.buttonForm} onClick={autenticar} type="submit" id="loginBtn"><strong>Login</strong></button>

            </form>


            </div>
        </div>
        
    );

}