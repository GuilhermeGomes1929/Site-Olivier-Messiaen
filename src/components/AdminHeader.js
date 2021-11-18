import { Link } from "react-router-dom";
import Style from './componentsStyle/AdminHeader.module.css'

export default function AdminHeader(){

    return (
        <header className={Style.cabecalho}>
            <a> <Link className={Style.itemOutrasPaginas} to="./biografia">Biografias</Link> </a>
            <a> <Link className={Style.itemOutrasPaginas} to="./obras">Obras</Link> </a>
            <a><Link className={Style.itemOutrasPaginas} to="/">Logout</Link></a>
        </header>
    );

}