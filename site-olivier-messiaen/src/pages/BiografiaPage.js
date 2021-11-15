import Biografia from "../components/Biografia"
import MessiaenFoto from "../images/messiaenFoto.jpg"
import Styles from "./pagesStyle/BiografiaPage.module.css"
import BR from "../images/bandeiraBR.jpg"
import USA from "../images/bandeiraUSA.jpg"


export default function BioPage(){

    let biografias = [
        {
            linguaBandeira: BR,
            texto: "Nascido em 1908, na cidade de Avignon na França, o franco compositor, organista, professor e ornitólogo Oliver Eugène Prosper Charles Messiaen, Filho de um professor de literatura e tradutor de Shakespeare, e um poeta, CCIL Sauvage, Messiaen cresceu em um ambiente favorável a todas as expressões artísticas. Com seu talento precoce, ele estudou no Conservatório de Paris, onde estudou órgão e composição. Em 1936, ele foi um dos fundadores da Jeune France, um grupo dedicado à divulgação da nova música francesa. Foi designado organista na Igreja da Trinité de Paris em 1931, posto que ocupou até à sua morte. Durante a Batalha de França, Messiaen foi feito prisioneiro de guerra, e enquanto estava aprisionado compôs o Quatuor pour la fin du temps (\"Quarteto pelo fim do tempo\") para os quatro instrumentos disponíveis: piano, violino, violoncelo e clarinete."
        },
        {
            linguaBandeira: USA,
            texto: "Nascido em 1908, na cidade de Avignon na França, o franco compositor, organista, professor e ornitólogo Oliver Eugène Prosper Charles Messiaen, Filho de um professor de literatura e tradutor de Shakespeare, e um poeta, CCIL Sauvage, Messiaen cresceu em um ambiente favorável a todas as expressões artísticas. Com seu talento precoce, ele estudou no Conservatório de Paris, onde estudou órgão e composição. Em 1936, ele foi um dos fundadores da Jeune France, um grupo dedicado à divulgação da nova música francesa. Foi designado organista na Igreja da Trinité de Paris em 1931, posto que ocupou até à sua morte. Durante a Batalha de França, Messiaen foi feito prisioneiro de guerra, e enquanto estava aprisionado compôs o Quatuor pour la fin du temps (\"Quarteto pelo fim do tempo\") para os quatro instrumentos disponíveis: piano, violino, violoncelo e clarinete."
        }
    ]

    return(
        <div id={ Styles.bioLista }>
            <img id={ Styles.bioLista_foto } src={ MessiaenFoto } height="30%" width="30%"></img>
            <div>
                {biografias.map((umaBio)=>{
                    return(<Biografia 
                        linguaBandeira = {umaBio.linguaBandeira}
                        texto = {umaBio.texto}
                        />)
                })}
            </div>
        </div>
    );
}