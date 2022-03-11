import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Carrinho from '../pages/Carrinho';
import Home from '../pages/Home';

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
