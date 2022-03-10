import React from 'react';
import './App.css';
import Category from './pages/Category';

class App extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category />
      </div>
    );
  }
}

export default App;
