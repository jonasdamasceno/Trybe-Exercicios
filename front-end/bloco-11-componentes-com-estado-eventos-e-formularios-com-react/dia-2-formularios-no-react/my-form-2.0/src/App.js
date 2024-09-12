import React, {Component} from 'react';
import './App.css';
import FormDataDisplay from './components/FormDataDisplay';
import Form from './components/Form';
import FormErro from './components/FormErro';


const stateInitial = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  house: '',
  curriculum: '',
  job: '',
  jobDescription: '',
  error: {},
  submitted: false
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = stateInitial;
  }

  changeHandler = (event) => {

    let {name, value} = event.target;

    if(name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.setState({[name]: value});
  }
  
  onBlurHandler = (event) => {
    let {name, value} = event.target;

    if(name === 'city') value = value.math(/^\d/) ? '': value;

    this.updatestate(name, value);
  }

  updatestate = (name, value) => {
    this.setState((state) => ({
      [name]: value,
      error: {
        ...state.error,
        [name]: this.validate(name, value)
      }
    }));
  }

  validateAddress = (address) => address.replace(/[^\w\s]/gi, '')

  handleSubmit = (event) => {
    event.preventDefault();
  }

  validate (fildName, value) {
    switch(fildName) {
      case 'email':
        const inValid = value.math(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
        return inValid ? '' : 'Email inválido';
        default:
          break;
    }
    return '';
  }

  clearForm = () => { this.setState(stateInitial) }

  sendForm = () => { this.setState({submitted: true}) }

  

  render() {
    const {submitted} = this.state;

    return (
      <main className="App"> 
        <Form 
          sendForm={this.sendForm}
          clearForm={this.clearForm}
          changeHandler={this.changeHandler}
          onBlurHandler={this.onBlurHandler}
        />
        <div className='container'>
          <FormErro error={this.state.error} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>

    );
  }
}
export default App;
