import React, { Component } from 'react';
import '../App.css';
import '../store.js';

//import films from './films.json';
import axios from 'axios';

import {Container} from 'semantic-ui-react';
import FilmCard from './FilmCart';
import { Card } from 'semantic-ui-react';
import Sort from '../containers/Sort';
import Menu from '../containers/Menu';


class App extends Component {
  componentWillMount() {
    const { setFilms } = this.props;
    axios.get('/films.json').then(response => {
     setFilms(response.data);

    });
  }


  render() {
    const { films,isReady, setSort,addToCart, } = this.props;
    return (
     <Container>
      <div>
      <Menu/>
      <Sort setSort={setSort}/>
      </div>
      <Card.Group itemsPerRow={4}>
      {!isReady ? 'loading...'   : films.map(film => (
            <FilmCard  {...film} addToCart={addToCart} key={film.id} />
          ))
        }
      </Card.Group>
     
     </Container>
    )
  }

}


export default App;
