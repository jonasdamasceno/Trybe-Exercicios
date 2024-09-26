import React, { useEffect, useState} from "react";
import '../App.css';

export default function Form1() {
  const [name, setName ] = useState('');
  const [idade, setIdade ] = useState('');
  const [location, setLocation ] = useState('');
  const [modulo, setModulo ] = useState('');

  useEffect(() => {

  }, [])
  
  return (
    <div className="app-form">
      <form action="">
          <input 
            type="text"
            placeholder='Nome Completo'
            value={name}
            onChange={({target}) => setName(target.value)}
          />
          <input 
            type="number"
            placeholder='idade'
            value={idade}
            onChange={({target}) => setIdade(target.value)}
          />
          <input 
          type="text" 
          placeholder='cidade'
          value={location}
          onChange={({target}) => setLocation(target.value)}
          />
          <section>
          <input 
            type="radio"
            id="fundamentos"
            name="modulo"
            value="fundametos"
            checked={modulo === "fundamentos"}
            onChange={({target}) => setModulo(target.value)}
          />
          Fundamentos
          <input 
          type="radio"
          id="Front-End"
          name="modulo"
          value="front-end"
          checked={modulo === "front-end"}
          onChange={({target}) => setModulo(target.value)}
          />
          Front-End
          <input 
          type="radio"
          id="Back-End"
          name="modulo"
          value="back-end"
          checked={modulo === "back-end"}
          onChange={({target}) => setModulo(target.value)}
          />
          Back-End
          <input type="radio"
          id="cienciaDaComputação"
          name="modulo"
          value="ciencia da computação"
          checked={modulo === "ciencia da computação"}
          onChange={({target}) => setModulo(target.value)}
          />
          Ciencia da Computação
          </section>
          <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}