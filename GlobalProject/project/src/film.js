import React, { Component } from 'react';
import './store.js';

//import films from './films.json';
import axios from 'axios';
import * as films from './actions/films'
import { Container } from 'semantic-ui-react';

import { Card } from 'semantic-ui-react';
import Sort from './containers/Sort';
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

    let jouke; //говнокод, но работает
    const { k, films, isReady, setSort, addToCart, removeFromCart } = this.props;
    var s = this.state || null
    var id = this.props.location.pathname.slice();
    id = id.replace(/[^-0-9]/gim, '');
    if (s != null) {
      for (var i = 0; i < s.films.length; i++) {
        if (s.films[i].id == id) {
           jouke = s.films[i];
        }
      }
    }
   


    return (
      <Container>
        <div>
          <Menu />
         
        </div>
        <Card.Group itemsPerRow={4}>
        

            <Film  {...jouke} addToCart={addToCart} removeFromCart={removeFromCart} key={film.id} />

          
          
        </Card.Group>


      </Container>
    )
  }

}


export default film;
