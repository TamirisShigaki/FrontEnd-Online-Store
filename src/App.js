import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas';
import './App.css';
import Category from './pages/Category';

class App extends React.Component {
  render() {
    return (    
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    );
  }
}

export default App;
