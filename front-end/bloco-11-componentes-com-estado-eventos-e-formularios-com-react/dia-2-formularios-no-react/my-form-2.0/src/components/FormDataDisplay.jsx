import React, {Component} from 'react';


class FormDataDisplay extends Component {

  render() {
    const { correntState: {name, email, cpf, address, city, state, house, curriculum, job, jobDescription} } = this.props;
        return (
          <div className="App">
            <h2>dados enviados</h2>
            <h3>pessoal</h3>
            <div>Name:{ name }</div>
            <div>Email:{ email }</div>
            <div>CPF:{ cpf }</div>
            <div>Endereço:{ address }</div>
            <div>Cidade:{ city }</div>
            <div>Estado:{ state }</div>
            <div>Tipo de residencia:{ house }</div>
            <h3>dados profissionais</h3>
            <div>Curriculum:{ curriculum }</div>
            <div>Cargo:{ job }</div>
            <div>Descrição do cargo:{ jobDescription }</div>

          </div>

        )
    }
}

export default FormDataDisplay;