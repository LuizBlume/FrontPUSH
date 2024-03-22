import Post from '../Posts';
const Article = () => {
    return (
        <section className="container">
            <h3>Articles</h3>
            <div className="mt-3 container-posts">
                <Post subtitle="Tecnologia" title="O guia definitivo sobre o blog" />
                <Post subtitle="Fotografia" title="Quais as melhores cameras para 2024?" />
                <Post subtitle="Cinema" title="Os 10 filmes com maior bilheteria" />
            </div>
        </section>
    );
}
export default Article;