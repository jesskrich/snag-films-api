import React, { Component } from 'react';
import './App.css';
import { getSnag } from './snagAPI';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { films: [],
                   loading: true
                 }
  }

  componentDidMount() {
    getSnag('http://www.snagfilms.com/apis/films.json?limit=10')
      .then(data => this.setState({
        films: data.films.film,
        loading: false
      }))
  }

  render() {
    if (this.state.loading)
      return <h2>Loading...</h2>
    return (
      <ul>
        {this.state.films.map(item =>
          <li>
            <img src={item.images.image[0].src} />
            <p>{item.title}</p>
          </li>
        )}
      </ul>
    )
  }
}

export default App;
