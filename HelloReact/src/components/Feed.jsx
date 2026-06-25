const posts = [
    { id: 1, autor: "Ana", texto: "Primeiro post!" },
    { id: 2, autor: "Leo", texto: "React é top!" },
];

const Post = ({ id, autor, texto }) => {
    return (
        <article>
            <strong>{id}</strong> - <span>{autor}</span>
            <p>{texto}</p>
        </article>
    )
}

const Feed = () => {
    return (
        <div>
            {
                posts.map(post =>
                    <Post key={post.id} {...post} />
                )
            }
        </div>
    )
}

export default Feed