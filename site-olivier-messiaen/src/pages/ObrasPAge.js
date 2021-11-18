import Obra from "../components/Obra";
import Styles from "./pagesStyle/ObrasPage.module.css"

export default function PageObras(){

    let obras = [
        {
            id: 0,
            titulo: "Trois petite liturgies de la presence divine",
            data: "1939",
            instrumentos: "Piano, Ondes Martenot e Coral",
            url: "pdON4zDTpR8"
        },
        {
            id: 1,
            titulo: "Huit Préludes",
            data: "1929",
            instrumentos: "Piano",
            url: "z2pwTP7g7xE"
        },
        {
            id: 2,
            titulo: "Poèmes pour Mi",
            data: "1937",
            instrumentos: "Voz e piano",
            url: "OPHuZr96zck"
        },
        {
            id: 3,
            titulo: "Vingt Regards sur l'Enfant-Jésus",
            data: "1944",
            instrumentos: "Piano",
            url: "ovMnmIoZh74"
        },
        {
            id: 4,
            titulo: "L'Ascension",
            data: "1933",
            instrumentos: "Órgão",
            url: "icCQu1FCtfQ"
        },
        {
            id: 5,
            titulo: "Cantéyodjayâ",
            data: "1948",
            instrumentos: "Piano",
            url: "0xXSoogzRP4"
        },
        {
            id: 6,
            titulo: "Quatuor Pour La Fin du Temps",
            data: "1940",
            instrumentos: "Violino, Violoncello, Clarinete e Piano",
            url: "QAQmZvxVffY"
        },
        {
            id: 7,
            titulo: "Turangalîla-Sinfonie",
            data: "1948",
            instrumentos: "Piano, Ondes Martenot e Orquestra",
            url: "eCO7le_6LzU"
        },
        {
            id: 8,
            titulo: "Quatre Études de Rythme",
            data: "1950",
            instrumentos: "Piano",
            url: "aSISzURlwcc"
        },
        {
            id: 9,
            titulo: "Catalogue d´Oiseaux",
            data: "1956-1958",
            instrumentos: "Piano",
            url: "b1ANOcLhuXM"
        },
        {
            id: 10,
            titulo: "Fête des Belles Eaux",
            data: "1937",
            instrumentos: "Sexteto de Ondes Martenot",
            url: "nrYgm5MML58"
        },
        {
            id: 11,
            titulo: "Saint-François d´Asisse",
            data: "1983",
            instrumentos: "Soprano, 3 Tenores, 4 Barítonos, Baixo, Coral e Orquestra",
            url: "0TufQgNdfss"
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