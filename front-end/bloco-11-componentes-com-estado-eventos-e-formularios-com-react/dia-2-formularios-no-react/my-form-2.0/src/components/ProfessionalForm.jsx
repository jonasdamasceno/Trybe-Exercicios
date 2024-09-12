
import React, {Component} from "react";

class ProfessionalForm extends Component {
    render () {
      const { changeHandler } = this.props;
        return (
          <fieldset>
            <legend>Dados profissionais</legend>
            <div className="form-group">
              curriculum:
              <input
                type="textarea"
                name='curriculum'
                maxLength={1000}
                required
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              cargo:
              <input
                type="textarea"
                name='job'
                maxLength={40}
                required
                onChange={changeHandler}
                onMouseEnter = {() => {
                  alert ('Preencha o campo cargo com cuidado')
                }
                }
              />
                <div className="form-group">
                  descrição do cargo:
                  <input
                    type="textarea"
                    name='jobDescription'
                    maxLength={500}
                    onChange={changeHandler}
                  />

                </div>
            </div>

          </fieldset>
        )
    }

}

export default ProfessionalForm;