import Header from './components/Header';
import Article from './components/Article';

function App() {
  let carrinho = 0;
  return (
    <>
      <Header />
      <Article />
      <h1>Carrinho de compras: {carrinho}</h1>
      <div className="flex">
        <button className="ml-2 add-button">+</button>
        <button className="ml-2 remove-button">-</button>
      </div>
    </>
  );
}

export default App;
