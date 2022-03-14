//import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const getTestes = async () => {
    fetch("https://app.olimpiadas.app/teste")
      .then((res) => res.json())
      .then((response) =>
        //console.log(response),
        setData(response.data)
      );
  };

  /* useEffect(()=> {
    axios.get('https://app.olimpiadas.app/teste')
    .then((res) =>{
      const dados = res.data
      setData(dados.data)  
    })
  })
 */
  useEffect(() => {
    getTestes();
  }, []);

  return (
    <div className="container p-3">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <h1>Lista</h1>
      <table className="table table-striped table-hover" borderless>
        <thead className="thead-dark">
          <tr>
            <th className="d-none d-md-table-cell">ID</th>
            <th className="d-none d-md-table-cell">Nome</th>
            <th className="d-none d-md-table-cell">Imagem</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {Object.values(data).map(teste => (
            <tr key={teste.id}>
              <th>{teste.id}</th>
              <th>{teste.name}</th>
              <th>
                <img
                  src={teste.img}
                  alt={teste.nome}
                  className=""
                  width={100}
                  height={100}
                />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
