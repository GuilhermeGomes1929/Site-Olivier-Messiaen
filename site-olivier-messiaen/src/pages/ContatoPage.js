import Styles from "./pagesStyle/ContatoPage.module.css"
import FB from "../images/facebookLogo.png"
import IG from "../images/instagramLogo.png"
import YT from "../images/youtubeLogo.png"
import ContatoIcon from "../components/ContatoIcon.js"

export default function ContatoPage(){

    let contatosEmIcone = [
        {
            iconeContato: FB,
            linkContato: "https://www.facebook.com/"
        },
        {
            iconeContato: IG,
            linkContato: "https://www.instagram.com/"
        },
        {
            iconeContato: YT,
            linkContato: "https://www.youtube.com/"
        }
    ]

    return(
        <div>
            <h1 id={ Styles.nome }>Olivier Messiaen</h1>
            <div id={ Styles.contatos }>
                <div className={ Styles.contatos_icones }>
                    {contatosEmIcone.map((umContato)=>{
                        return (<ContatoIcon
                            iconeContato={umContato.iconeContato}
                            linkContato={umContato.linkContato}
                        />)
                    })}
                </div>
                <div id={ Styles.email }>
                    <a id={ Styles.email_link } href="https://gmail.com">composermessiaen@gmail.com</a>
                </div>
            </div>
        </div>
    );
}