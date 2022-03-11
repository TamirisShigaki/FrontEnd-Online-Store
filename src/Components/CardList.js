import React, { Component } from 'react';
// import Card from './Card';
import { getProductsFromQuery } from '../services/api';
import Card from './Card';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
      queryInput: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      queryInput: target.value,
    });
  }

  async handleSubmit(event) {
    const { queryInput } = this.state;
    event.preventDefault();
    const query = await getProductsFromQuery(queryInput);
    this.setState({
      cardList: query.results,
    });
  }

  render() {
    const { queryInput, cardList } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="query-input">
            <input
              type="text"
              data-testid="query-input"
              id="query-input"
              value={ queryInput }
              onChange={ (event) => this.handleChange(event) }
            />
            <button
              type="submit"
              data-testid="query-button"
              onClick={ (event) => this.handleSubmit(event) }
            >
              Botão
            </button>
          </label>
        </form>
        {
          cardList.length > 0
            ? (
              cardList.map((result) => (
                <Card
                  key={ result.id }
                  result={ result }
                />
              )))
            : <h1>Nenhum produto foi encontrado</h1>
        }

      </div>
    );
  }
}

export default CardList;
