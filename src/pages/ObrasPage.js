import Obra from "../components/Obra";
import Styles from "./pagesStyle/ObrasPage.module.css"
import api from "../service/api";
import { useState } from "react";

export default function PageObras(){

    const [listaDeObras, setListaDeObras] = useState([])

    function getobras(){
        api.get("/obra/")
        .then((response) => setListaDeObras(response.data))
        .catch((erro) => alert("Ainda não possui obras cadastradas, por favor acesse /login para cadastrar obras."))
    }
    
    getobras()

    return(
        <div id={ Styles.conteudo }>
            <h1 id={ Styles.tituloPagina }>Obras</h1>
            <div className={ Styles.listaObras }>
                {listaDeObras.map((obra)=>{
                    return (<Obra 
                        id={obra.id} 
                        titulo={obra.titulo}
                        data={obra.ano}
                        instrumento={obra.instrumento}
                        url={obra.url}
                    />)
                })}
            </div>
        </div>
    );
}