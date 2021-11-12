import Biografia from "../components/Biografia"
import MessiaenFoto from "../images/messiaenFoto.jpg"

export default function BioPage(){

    let biografias = [
        {
            lingua: "a",
            texto: "a"
        },
        {
            lingua: "a",
            texto: "a"
        }
    ]

    return(
        <div id={ Styles.bioLista }>
            <img id={ Styles.bioLista_foto } src={MessiaenFoto}></img>
            <div>
                {biografias.map((umaBio)=>{
                    return(<Biografia 
                        lingua = {umaBio.lingua}
                        texto = {umaBio.texto}
                        />)
                })}
            </div>
        </div>
    );
}