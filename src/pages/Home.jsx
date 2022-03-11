import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../Components/CardList';
import Category from '../Components/Category';

class Home extends React.Component {
  render() {
    return (
      <>
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
        <aside>
          <Category />
        </aside>
        <main>
          <CardList />
        </main>
      </>
    );
  }
}

export default Home;

// Requisito 1 - Tamiris Shigaki, Hanna Bacelar, João Victor
// Requisito 3 - Hanna Bacelar
