import { Link } from 'react-router-dom';
import SearchIcon from "../images/Search-icon.png"

export default function DefaultHeader(){
    return(
        <header id="outrasPaginas">
                <a className="itemOutrasPaginas"> <Link to="/">Página principal</Link> </a>
                <a className="itemOutrasPaginas"> <Link to="/biografia">Biografia</Link> </a>
                <a className="itemOutrasPaginas"> <Link to="/obras">Obras</Link> </a>
                <a className="itemOutrasPaginas"> <Link to="/contato">Contato</Link> </a>
                <button className="botaoPesquisa" >
                    <img src={SearchIcon} alt="Pesquisa" height="20px" width="20px"/>
                </button>
        </header>
    );
}