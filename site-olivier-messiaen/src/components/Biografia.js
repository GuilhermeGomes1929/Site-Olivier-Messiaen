import Styles from "./componentsStyle/Biografia.module.css"

export default function Biografia({ linguaBandeira, texto }) {

    return(
        <div className= { Styles.bio }>
            <img alt="" className= { Styles.bio_lingua } src={ linguaBandeira } height="32.5rem" width="50rem"></img>
            <p className={ Styles.bio_texto }>{ texto }</p>
        </div>    
    )
}