import Obra from "../components/Obra";

export default function PageObras(){

    let obras = [
        {
            id: 0,
            titulo: "Teste",
            data: "2021",
            instrumentos: "violino e piano",
            url: "HEaIsKm-pao"
        },
        {
            id: 1,
            titulo: "Teste2",
            data: "2022",
            instrumentos: "uculele",
            url: "HEaIsKm-pao"
        }
    ]

    return(
        <div>
            {obras.map((obra)=>{
                return (<Obra 
                id={obra.id} 
                titulo={obra.titulo}
                data={obra.data}
                instrumento={obra.instrumentos}
                url={obra.url}
                />)
            })}
            <h1>Agora está na página de obras</h1>
        </div>
    );
}