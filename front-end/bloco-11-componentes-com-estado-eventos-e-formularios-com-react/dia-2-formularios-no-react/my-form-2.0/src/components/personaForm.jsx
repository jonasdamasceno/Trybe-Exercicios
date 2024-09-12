import React, { Component } from 'react';

const brazilStates = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso do Sul",
    "Mato Grosso",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  class PersonaForm extends Component {
    render() {
      const {changeHandler, onBlurHandler, currentState} = this.props;
      return () => {
        <fieldset>
          <legend>Dados pessoais</legend>
          <div className="form-group">
            nome:
            <input 
              type="name"
              maxLength={40}
              id="name" 
              placeholder="Nome"
              required
              onChange={changeHandler} 
            />
          </div>
          <div className="form-group">
            Email:
            <input
              type="email"
              name='email'
              maxLength={50}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            cpf:
            <input 
              type= "text"
              name='cpf'
              maxLength={11}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            endereço:
            <input 
              type="text"
              name='address'
              maxLength={200}
              required
              onChange = {changeHandler}
            />
          </div>
          <div className="form-group">
            cidade:
            <input
              type="text"
              name='city'
              maxLength={28}
              required
              value={currentState.city}
              onChange={changeHandler}
              onBlur={onBlurHandler}
            />
          </div>
          <div className="form-group">
            estado:
            <select
              name='state'
              required
              onChange={changeHandler}
              defaultValue= "Selecione um estado"
            >
            <option value="">Selecione um estado</option>
            {
              brazilStates.map((value, key ) => (
                <option key= {key}> {value}</option>
              ))
            }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor='house'>
              Casa:
              <input
                type="radio"
                name='house'
                onChange={changeHandler}
              />
            </label>
            <label htmlFor='apartment'>
              Apartamento:
              <input
                type="radio"
                name='house'
                onChange={changeHandler}
              />
            </label>

          </div>
        </fieldset>
      }     

  }
}

    export default PersonaForm;