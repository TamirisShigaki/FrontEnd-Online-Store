import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h5>
          Lista de Categorias
        </h5>
        <div>
          {categories.map(({ id, name }) => (
            <button type="button" key={ id } data-testid="category">
              { name }
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
