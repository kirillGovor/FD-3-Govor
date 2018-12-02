import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './store.js';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { setFilms } from './actions/films';
//import films from './films.json';
import axios from 'axios';
import { Menu } from 'semantic-ui-react'

class App extends Component {


  componentWillMount() {
    const { setFilms } = this.props;
    axios.get('/films.json').then(response => {
     setFilms(response.data);

    });
  }


  render() {
    const { films,isReady } = this.props;
    return (
     <div>
      <div>
         <Menu>
        <Menu.Item name='browse'  onClick={this.handleItemClick}>
          Browse
        </Menu.Item>

        <Menu.Item name='submit' onClick={this.handleItemClick}>
          Submit
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='signup'  onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>

          <Menu.Item name='help' onClick={this.handleItemClick}>
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
      <ul>
        {!isReady ? 'loading...' 
          : films.map(film => (
            <li key={film.id}><b>{film.title}</b>-{film.author}</li>
          ))
        }
     </ul>
     </div>
    )
  }

}

const mapStateToProps = ({ films }) => ({
  films: films.films,
  isReady: films.isReady,
});
const mapDispatchToProps = dispatch => ({
  setFilms: films => dispatch(setFilms(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
