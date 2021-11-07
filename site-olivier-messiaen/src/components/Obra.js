export default function Obra({ id, titulo, data, instrumento, url }){
    return (
        <div class="umaObra">
            <h2 class="tituloObra">{titulo} - {data}</h2>
            <h3 class="comentarioObra">{instrumento}</h3>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}