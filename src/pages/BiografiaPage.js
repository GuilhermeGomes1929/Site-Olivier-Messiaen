import Biografia from "../components/Biografia"
import MessiaenFoto from "../images/messiaenFoto.jpg"
import Styles from "./pagesStyle/BiografiaPage.module.css"
import api from "../service/api"
import React, { useState } from "react"


export default function BioPage(){

    const [listaDeBiografias, setListaDeBiografias] = useState([])

    function getBios(){
        api.get("/biografia/")
        .then(response => { setListaDeBiografias(response.data) })
        .catch(erro => { alert("Ainda não possui biografias cadastradas, por favor acesse /login para cadastrar biografias.")})
    }

    getBios()

    return(
        <div id={ Styles.bioLista }>
            <img alt="" id={ Styles.bioLista_foto } src={ MessiaenFoto } height="30%" width="30%"></img>
            <div>
                {listaDeBiografias.map((bio)=>{
                    return(<Biografia 
                        linguaBandeira = {bio.urlIcon}
                        texto = {bio.texto}
                        />)
                })}
            </div>
        </div>
    );
}