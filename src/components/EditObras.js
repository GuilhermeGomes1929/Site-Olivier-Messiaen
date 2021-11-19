import React, { useRef, useState } from "react";
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
    const [idState, setIdState] = useState(false)
    const [tituloState, setTituloState] = useState(false)
    const [anoState, setAnoState] = useState(false)
    const [urlState, setUrlState] = useState(false)
    const [instrumentoState, setInstrumentoState] = useState(false)
    const [deletarState, setDeletarState] = useState(false)
    const [criarState, setCriarState] = useState(false)
    const [editState, setEditState] = useState(true)


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

    function mudarAcao(valor){
        setAcao(valor)

        if(acao == "C"){
            setCriarState(true)
            setEditState(false)
            setDeletarState(false)
            setIdState(true)
            setInstrumentoState(false)
            setTituloState(false)
            setUrlState(false)
            setAnoState(false)
        }else if(acao == "D"){
            setCriarState(false)
            setEditState(false)
            setDeletarState(true)
            setIdState(false)
            setInstrumentoState(true)
            setTituloState(true)
            setUrlState(true)
            setAnoState(true)
        }else if (acao == "E"){
            setCriarState(false)
            setEditState(true)
            setDeletarState(false)
            setIdState(false)
            setInstrumentoState(false)
            setTituloState(false)
            setUrlState(false)
            setAnoState(false)
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
                    <input 
                    disabled={idState}
                    onChange={(e) => { setId(e.target.value)}} 
                    type="number" name="idObra" id="idObra" min="0"/>        
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Título:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input disabled={tituloState} onChange={(e) => { setTitulo(e.target.value)}} type="text" name="tituloObra" id="tituloObra"/>
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Ano de criação:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input disabled={anoState} onChange={(e) => { setData(e.target.value)}} type="number" name="dataObra" id="dataObra"/>
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Instrumentos:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input disabled={instrumentoState} onChange={(e) => { setInstrumento(e.target.value)}} type="text" name="instrumentoObra" id="instrumentoObra"></input>
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Url:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input disabled={urlState} onChange={(e) => { setUrl(e.target.value)}} type="text" name="urlObra" id="urlObra"></input>
                </div>
            </div>

            <div className={Style.itemForm}>
                <div className={Style.descricaoCampo}>
                    <label><strong>Ação:</strong></label>
                </div>
                <div className={Style.campo}>
                    <input
                    checked={editState} 
                    onChange={(e) => { mudarAcao("E")}} type="radio" />Editar
                    <input
                    checked={criarState}
                    onChange={(e) => { mudarAcao("C")}} type="radio" />Criar
                    <input
                    checked={deletarState}
                    onChange={(e) =>{ mudarAcao("D") }} type="radio" />Deletar
                </div>
            </div>

            <button onClick={(e) => { enviar(e) }} className={Style.buttonForm}><strong>Enviar</strong></button>

            </form>
        </div>
    );
}