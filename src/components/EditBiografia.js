import Style from "./componentsStyle/AdminPageComponents.module.css"
import React, { useState } from "react";
import api from "../service/api";


export default function EditBiografia(){

    const [criando, setCriando] = useState(false)
    const [lingua, setLingua] = useState()
    const [url, setUrl] = useState()
    const [texto, setTexto] = useState()

    function cadastrar(){
        api.post("https://olivier-messiaen.herokuapp.com/biografia/registrar", {
            lingua: lingua,
            texto: texto,
            urlIcon: url
        })
        .then((response) => {alert("Cadastro de biografia realizado com sucesso")})
        .catch((erro) => {alert(erro)})
    }

    function editar(){
        api.put("https://olivier-messiaen.herokuapp.com/biografia/editar", {
            lingua: lingua,
            texto: texto,
            urlIcon: url
        })
        .then(response => { alert("Edição feita com sucesso") })
        .catch(erro => { alert(erro.message) })
    }

    function enviar(event){
        event.preventDefault()
        if(criando){
            if(lingua == null || texto == null || url == null){
                alert("Preencha todos os campos")
            }else{
                cadastrar()
            }
        }else{
            if(lingua == null || texto == null || url == null){
                alert("Preencha todos os campos")
            }else{
                editar()
            }
        }
    }



    return(
    <div className={Style.mainContainer}>
        <h1 className={Style.titulo}>Biografia</h1>
        <form class="forms">

        <div className={Style.itemForm}>
            <div className={Style.descricaoCampo}>
                <label><strong>Língua:</strong></label>
            </div>
            <div className={Style.campo}>
                <input onChange={(e) => {setLingua(e.target.value)}} type="text" name="lingua" id="lingua"/>        
            </div>
        </div>

        <div className={Style.itemForm}>
            <div className={Style.descricaoCampo}>
                <label><strong>Url do ícone:</strong></label>
            </div>
            <div className={Style.campo}>
                <input onChange={(e) => {setUrl(e.target.value)}} type="text" name="url" id="url"/>
            </div>
        </div>

        <div className={Style.itemForm}>
            <div className={Style.descricaoCampo}>
                <label><strong>Texto:</strong></label>
            </div>
            <div className={Style.campo}>
                <textarea onChange={(e) => {setTexto(e.target.value)}} ></textarea>
            </div>
        </div>

        <div className={Style.itemForm}>
            <div className={Style.descricaoCampo}>
                <label><strong>Ação:</strong></label>
            </div>
            <div className={Style.campo}>
                <input onClick={(e) => {setCriando(false)}} type="radio" name="acaoObra" id="acaoObraEditar" checked/>Editar
                <input onClick={(e) => {setCriando(true)}} type="radio" name="acaoObra" id="acaoObraCriar"/>Criar
            </div>
        </div>

        <button onClick={(e)=>{enviar(e)}} className={Style.buttonForm}><strong>Enviar</strong></button>

        </form>
    </div>
    );
}