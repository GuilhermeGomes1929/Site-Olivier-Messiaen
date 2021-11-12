import MessiaenFoto from "../images/messiaenFoto.jpg"

export default function Biografia({ lingua, texto }) {

    return(
        <div className= { Styles.bio }>
            <img className= { Styles.bio_lingua } src={ lingua } height="32.5rem" width="5%"></img>
            <p className={ Styles.bio_texto }>{ texto }</p>
        </div>    
    )
}