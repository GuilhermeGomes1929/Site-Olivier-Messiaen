import Obra from "../components/Obra";

export default function PageObras(){

    let obras = [
        {
            id: 1,
            data: "2021",
            instrumento: "violão",
            titulo: "Teste",
            url: "HEaIsKm-pao"

        },
        {
            id: 2,
            data: "2022",
            instrumento: "uculele",
            titulo: "Teste2",
            url: "HEaIsKm-pao"

        }
    ]

    return(
        <div>
            {obras.map((obra)=>{
                return (<Obra id={obra.id} 
                titulo={obra.titulo}
                data={obra.data}
                instrumento={obra.instrumento}
                url={obra.url}/>)
            })}
            <h1>Agora está na página de obras</h1>
        </div>
    );
}