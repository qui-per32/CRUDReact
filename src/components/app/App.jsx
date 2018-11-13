import React, { Component } from 'react';
import Header from '../header/headerComponent';
import Main from '../mainComponent/mainComponent';
import Footer from '../footer/footerComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
