import { Link } from 'react-router-dom';
import BotaoPesquisa from "../images/R.png";
import Styles from "./componentsStyle/DefaultHeader.module.css";

export default function DefaultHeader(){
    return(
        <header id={ Styles.header }>
                <a> 
                    <Link to="/" className={ Styles.header_item }>Página principal</Link>
                </a>
                <a> 
                    <Link to="/biografia" className={ Styles.header_item }>Biografia</Link>
                </a>
                <a> 
                    <Link to="/obras" className={ Styles.header_item }>Obras</Link>
                </a>
                <a> 
                    <Link to="/contato" className={ Styles.header_item }>Contato</Link>
                </a>
                <button className={ Styles.header_item__botaoPesquisa } >
                    <img src={ BotaoPesquisa } alt="Pesquisa" height="20px" width="20px"/>
                </button>
        </header>
    );
}