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
    const result = await getCategories();
    this.setState({ result });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h5>
          Lista de Categorias
        </h5>
        {

        }
      </div>
    );
  }
}

export default Category;
