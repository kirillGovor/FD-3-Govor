import React, { Component } from 'react';
import './store.js';

//import films from './films.json';
import axios from 'axios';
import * as films from './actions/films'
import { Container } from 'semantic-ui-react';

import { Card } from 'semantic-ui-react';
import Menu from './containers/Menu';
import Film from './containers/film';



var setFilms = films.setFilms

class film extends Component {
  componentWillMount() {
    var setFilms = films.setFilms

    axios.get('./films.json').then(response => {
      var filmsk = setFilms(response.data);
      var films = filmsk.payload;
      this.setState({
        films: films,
      });
    });
  }



  render() {

    let Newfilm; // т.к. я через редьюсер перекинуть не могу а c hash-router так и не разобрался
    const { k, films, isReady, setSort, addToCart, removeFromCart } = this.props;
    var state = this.state || null
    var id = this.props.location.pathname.slice();
    id = id.replace(/[^-0-9]/gim, '');
    if (state != null) {
      for (var i = 0; i < state.films.length; i++) {
        if (state.films[i].id == id) {
          Newfilm = state.films[i];
        }
      }
    }
   


    return (
      <Container>
        <div>
          <Menu />
         
        </div>
        <Card.Group itemsPerRow={4}>
        

            <Film  {...Newfilm} addToCart={addToCart} removeFromCart={removeFromCart} key={film.id} />

          
          
        </Card.Group>


      </Container>
    )
  }

}


export default film;
