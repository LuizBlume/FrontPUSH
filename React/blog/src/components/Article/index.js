import Post from '../Posts';
const Article = () => {
    return (
        <section className="container">
            <h3>Articles</h3>
            <div className="mt-3 container-posts">
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    );
}
export default Article;