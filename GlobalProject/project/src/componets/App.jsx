import React, { Component } from 'react';

import '../store.js';
import '../App.css';
import axios from 'axios';

import {Container} from 'semantic-ui-react';
import FilmCard from './FilmCart';
import { Card } from 'semantic-ui-react';
import Sort from '../containers/Sort';
import Mobile from '../componets/MobilSort';
import MenuS from '../containers/Menu';


import {slide as Menu} from 'react-burger-menu';



class App extends Component {
  componentWillMount() {
    const { setFilms } = this.props;
    axios.get('./films.json').then(response => {
     setFilms(response.data);
   
    });
  }
 

  render() {
  
    const { films,isReady, setSort,addToCart,removeFromCart,user, } = this.props;
    return (
      <div>
    <Menu className="bm-menu">
    <Mobile setSort={setSort}/>
    </Menu>
     <Container>


      <div>
      <MenuS {...user}/>
      <Sort setSort={setSort}/>
      </div>
      
      <Card.Group centered >
      {!isReady ? 'loading...'   : films.map(film => (
            <FilmCard  {...film} addToCart={addToCart} removeFromCart={removeFromCart} key={film.id} />//,
          ))
        }
      </Card.Group>
    

     </Container>
     </div>
    )
  }

}


export default App;
