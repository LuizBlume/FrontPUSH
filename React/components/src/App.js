import { useState, useEffect, useCallback } from 'react';
import './index.css';
function App() {
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React',
    'Estudar Node',
    'Estudar MongoDB',
  ]);
  const [input, setInput] = useState('');
  const addTarefas = useCallback(() => {
    setTarefas([...tarefas, input])
    setInput('')
  }, [input, tarefas]);
  function handleCampo(e) {
    setInput(e.target.value);
  }
  // funciona como um componentDidMount
  useEffect(() => {
    const tarefaStorage = localStorage.getItem('Array de tarefas')
    if (tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage));
    }
  }, []);
  // funciona como um componentDidUpdate 
  useEffect(() => {
    localStorage.setItem('Array de tarefas', JSON.stringify(tarefas))
  }, [tarefas, input])
  return (
    <div className="App">
      <ul>
        {
          tarefas.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
      <input type='text' name='nome' value={input} onChange={handleCampo} />
      <button type='button' onClick={addTarefas} >Adicionar</button>
      {
        tarefas.length > 0 && (
          <h2>Você tem {tarefas.length} tarefas!</h2>
        )
      }
    </div>
  );
}
export default App;
