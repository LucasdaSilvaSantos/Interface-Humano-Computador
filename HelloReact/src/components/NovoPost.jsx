import React from 'react'
const Like = ({ quantLike, setQuatLike }) => {
    const like = () => {
        setQuatLike(quantLike + 1);
    }
    return (
        <button type="button" onClick={like}>
            👍{quantLike}
        </button>
    )
}
const NovoPost = () => {
    const [texto, setTexto] = React.useState("");
    const [quantLike, setQuatLike] = React.useState(0);
    const publicar = (event) => {
        event.preventDefault();
        if (!texto.trim()) return;
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
                    placeholder='Insita o texto do post'
                >
                </textarea>
                <div>
                    <button type="submit">Publicar</button>
                    <Like quantLike={quantLike} setQuatLike={setQuatLike} />
                    <button type="reset"> Limpar</button>
                </div>
            </form>
            <p>Texto</p>
        </>
    )
}
export default NovoPost