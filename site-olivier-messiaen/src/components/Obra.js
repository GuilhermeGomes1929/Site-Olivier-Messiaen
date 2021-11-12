import Styles from "./componentsStyle/Obra.module.css"

export default function Obra({ id, titulo, data, instrumento, url }){
    return (
        <div className={ Styles.umaObra }>
            <h2 className={ Styles.umaObra_titulo }>{titulo} - {data}</h2>
            <h3 className={ Styles.umaObra_instrumento }>Para {instrumento}</h3>
            <iframe width="420" height="225" src={"https://www.youtube.com/embed/" + url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}