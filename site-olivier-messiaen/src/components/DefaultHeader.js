import { Link } from 'react-router-dom';

export default function DefaultHeader(){
    return(
        <header class="outrasPaginas">
                <a class="itemOutrasPaginas"> <Link to="/">Página principal</Link> </a>
                <a class="itemOutrasPaginas"> <Link to="/obras">Obras</Link> </a>
                <a class="itemOutrasPaginas"> <Link to="/contato">Contato</Link> </a>
                <button class="botaoPesquisa" >
                    <img alt="Pesquisa" height="20px" width="20px"/>
                </button>
        </header>
    );
}