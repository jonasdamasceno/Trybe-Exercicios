import React, { Component } from 'react';

class FormErro extends Component {
  render() {

    const { error } = this.props;

    return (
      <div>
        {
          Object.keys(error).filter((fildName) => (
            error[fildName].length > 0
          )).map((fildName, i) => (
            <p key= { i }>
              { fildName }
              {FormErro[fildName]}
            </p>
          ))
        }

      </div>
    );
  }
}

export default FormErro;