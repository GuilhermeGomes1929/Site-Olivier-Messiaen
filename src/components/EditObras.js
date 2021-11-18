import React, { useState } from "react";
import api from "../service/api";
import Style from "./componentsStyle/AdminPageComponents.module.css"

export default function EditObras(){
//{ id, titulo, data, instrumento, url }
    
    const [acao, setAcao] = useState("E")
    const [id, setId] = useState()
    const [titulo, setTitulo] = useState()
    const [data, setData] = useState()
    const [instrumento, setInstrumento] = useState()
    const [url, setUrl] = useState()

    function cadastrar(){
        api.post("https://olivier-messiaen.herokuapp.com/obra/registrar", {
            titulo: titulo,
            ano: data,
            instrumento: instrumento,
            url: url
        })
        .then((response) => {alert("Cadastro de obra realizado com sucesso")})
        .catch((erro) => {alert(erro)})
    }

    function editar(){
        api.put("https://olivier-messiaen.herokuapp.com/obra/editar", {
            id: id,
            titulo: titulo,
            ano: data,
            instrumento: instrumento,
            url: url
        })
        .then(response => { alert("Edição feita com sucessa") })
        .catch(erro => { alert(erro) })
    }

    function deletar(){
        api.delete("https://olivier-messiaen.herokuapp.com/obra/deletar/" + id)
        .then(response => { alert("Obra "+ response.data.titulo+ " deletada com sucesso.") })
        .catch(erro => {alert(erro)})
    }

    function enviar(event){
        event.preventDefault()
        if(acao == "C"){
            if(titulo == null || data == null || instrumento == null || url == null){
                alert("Preencha todos os campos")
            }else{
                cadastrar()
            }
        }else if(acao == "E"){
            if(id == null || titulo == null || data == null || instrumento == null || url == null){
                alert("Preencha todos os campos")
            }else{
                editar()
            }
        }else if( acao == "D"){
            if(id == null){
                alert("Preencha o campo de Id")
            }else{
                deletar()
            }
        }
    }

    return(
        <div className={Style.mainContainer}>
            <h1 className={Style.titulo}>Obras</h1>
            <form class="forms">

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Id da obra:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input onChange={(e) => { setId(e.target.value)}} type="number" name="idObra" id="idObra" min="0"/>        
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Título:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input onChange={(e) => { setTitulo(e.target.value)}} type="text" name="tituloObra" id="tituloObra"/>
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Ano de criação:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input onChange={(e) => { setData(e.target.value)}} type="number" name="dataObra" id="dataObra"/>
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Instrumentos:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input onChange={(e) => { setInstrumento(e.target.value)}} type="text" name="instrumentoObra" id="instrumentoObra"></input>
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Url:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input onChange={(e) => { setUrl(e.target.value)}} type="text" name="urlObra" id="urlObra"></input>
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Ação:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input onClick={(e) => { setAcao("E")}} type="radio" name="acaoObra" id="acaoObraEditar" checked/>Editar
                    <input onClick={(e) => { setAcao("C")}} type="radio" name="acaoObra" id="acaoObraCriar"/>Criar
                    <input onClick={(e) =>{ setAcao("D") }} type="radio" name="acaoObra" id="acaoObraDeletar"/>Deletar
                </div>
            </div>

            <button onClick={(e) => { enviar(e) }} className={Style.buttonForm}><strong>Enviar</strong></button>

            </form>
        </div>
    );
}