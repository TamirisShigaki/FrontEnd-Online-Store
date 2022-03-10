import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Carrinho from './Carrinho';
import Home from './Home';

class Rotas extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/Carrinho" component={ Carrinho } />
      </Switch>
    );
  }
}
export default Rotas;
