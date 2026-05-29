import React from "react";

const Like = () => {
    const [quant, setQuant] = React.useState(0);
    const like = () => {
        setQuant(quant + 1);
    }
    return(
        <button type="button" onClick={like}>
            👍{quant}
        </button>
    )
}

const NovoPost = () => {
    const [texto, setTexto] = React.useState("Valor inicial do Estado");
    const publicar = (event) =>{
        event.preventDefault(); // previne ação padrão do formrulário.
        if(!texto.trim()) return;
        alert(texto);
        setTexto("");
    }
    return (
        <>
            <form onSubmit={publicar}>
                <textarea
                value={texto}
                onChange={e => setTexto(e.target.value)}
                rows={3}
                cols={50}
                placeholder="Insira o texto do post"
                >
                </textarea>
                <div>
                    <button type="submit">Publicar</button>
                    <Like />
                    <button type="reset">Limpar</button>
                </div>                
            </form>
            <p>
                texto
            </p>
        </>
    )
}

export default NovoPost