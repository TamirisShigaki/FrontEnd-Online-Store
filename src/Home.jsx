import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <header>
        <Link
          data-testid="shopping-cart-button"
          to="/Carrinho"
        >
          Carrinho de Compras

        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </header>

    );
  }
}

export default Home;

// Hanna Bacelar
