import React from 'react';
import ProfessionalForm from './ProfessionalForm';
import PersonaForm from './PersonaForm';

class Form extends React.Component {

    render() {
      const { changeHandler, onBlurHandler, currentState, sendForm, clearForm } = this.props;

      return (
        <form>
          <PersonaForm
            changeHandler={changeHandler}
            onBlurHandler={onBlurHandler}
            currentState={currentState}
          />
          <ProfessionalForm
            changeHandler={changeHandler}
          />
          <input 
            type="button" 
            onClick={ sendForm }
            value="Enviar"
          />
          <input
            type="button"
            onClick={ clearForm }
            value="Limpar"
          />
        </form>
      );
    }

}

export default Form;
 