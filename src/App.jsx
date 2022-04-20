import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const App = (props) => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    async function fetchData() {
      const obj = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      // console.log(obj)
    };
    fetchData()
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <h1>Carregando ...</h1>;
  if (data)
    return (
      <div>
        <button onClick={handleClick} style={{ marginRight: '1rem' }}>
          notebook
        </button>
        <button onClick={handleClick}>smartphone</button>

        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.nome} / R$ {item.preco}
            </li>
          ))}
        </ul>
      </div>
    );
  else return null;
};

export default App;
