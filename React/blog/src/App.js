import Header from './components/Header';
import Article from './components/Article';
import {useState} from 'react';
function App() {
  let [carrinho, setCarrinho] = useState(0);
  const add = () => {
    setCarrinho(carrinho + 1);
    console.log(carrinho);
  }
  const remove = () => {
    if (carrinho > 0) {
      setCarrinho(carrinho - 1);
      console.log(carrinho);
    }
  }
  return (
    <>
      <Header />
      <Article />
      <h1>Carrinho de compras: {carrinho}</h1>
      <div className="flex">
        <button className="ml-2 add-button" onClick={add}>+</button>
        <button className="ml-2 remove-button" onClick={remove}>-</button>
      </div>
    </>
  );
}

export default App;
