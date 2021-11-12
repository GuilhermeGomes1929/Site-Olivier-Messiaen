import Obra from "../components/Obra";
import Styles from "./pagesStyle/ObrasPage.module.css"

export default function PageObras(){

    let obras = [
        {
            id: 0,
            titulo: "Trois petite liturgies de la presence divine",
            data: "1939",
            instrumentos: "coral",
            url: "HEaIsKm-pao"
        },
        {
            id: 1,
            titulo: "Teste2",
            data: "2022",
            instrumentos: "uculele",
            url: "HEaIsKm-pao"
        },
        {
            id: 1,
            titulo: "Teste2",
            data: "2022",
            instrumentos: "uculele",
            url: "HEaIsKm-pao"
        },
        {
            id: 1,
            titulo: "Teste2",
            data: "2022",
            instrumentos: "uculele",
            url: "HEaIsKm-pao"
        },
        {
            id: 1,
            titulo: "Teste2",
            data: "2022",
            instrumentos: "uculele",
            url: "HEaIsKm-pao"
        }
    ]

    return(
        <div id={ Styles.conteudo }>
            <h1 id={ Styles.tituloPagina }>Obras</h1>
            <div className={ Styles.listaObras }>
                {obras.map((obra)=>{
                    return (<Obra 
                    id={obra.id} 
                    titulo={obra.titulo}
                    data={obra.data}
                    instrumento={obra.instrumentos}
                    url={obra.url}
                    />)
                })}
            </div>
        </div>
    );
}