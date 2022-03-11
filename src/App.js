import React from 'react';
import CardList from './Components/CardList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CardList />
      </>
    );
  }
}

export default App;
