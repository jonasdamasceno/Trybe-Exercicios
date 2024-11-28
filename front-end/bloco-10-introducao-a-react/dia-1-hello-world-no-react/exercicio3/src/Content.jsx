import React from "react";

   const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((conteudo, index) => {
          return (
            <div className="conteudo" key={index}>
              <h2>{conteudo.conteudo}</h2>
              <p>Bloco {conteudo.bloco}</p>
              <p>{conteudo.status}</p>
            </div>
          );
        }
        )}
      </div>
    );
  }
}
 
export default Content;                                                                                                                                                                                                            
