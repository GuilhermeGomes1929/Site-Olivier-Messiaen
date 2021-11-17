export default function ContatoIcon({ linkContato, iconeContato }) {
    return (
        <button style={{background: "transparent", borderWidth: 0}}>
            <a href={ linkContato }>
                <img src={ iconeContato } style={{width: "4rem", height: "4rem"}}></img>
            </a>
        </button>)
}