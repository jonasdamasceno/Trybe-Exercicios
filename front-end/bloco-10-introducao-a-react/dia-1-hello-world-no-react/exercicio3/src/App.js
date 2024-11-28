import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
          <Header />
        </header> 
        <li className='content'>
          <Content/>
        </li>
        <footer className='footer'>
          <Footer />
        </footer>
      </div>
    );
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           


export default App;
