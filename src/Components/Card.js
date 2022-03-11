import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { result } = this.props;
    const { title, thumbnail, price } = result;
    return (
      <div data-testid="product">
        <h3>
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <span>
          R$:
          { price }
        </span>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default Card;

// Requisito 5 - Feito por: Eduardo Muchak e Tamiris Shigaki
