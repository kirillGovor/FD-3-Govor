import { connect } from 'react-redux';
import * as filmsActions  from '../actions/films';
import App from '../componets/App';
import * as  SortActions  from '../actions/Sort';
import {bindActionCreators} from 'redux';
import orderBy from 'lodash/orderBy';
import films from '../film';
const sortBy = (films, SortBy) => {
  
  switch (SortBy){

    case 'price_expensive' :
     return  orderBy(films, 'price','asc');
   
    case 'price_cheap' :
     return orderBy(films, 'price','desc');
    
    case 'author' :
     return orderBy(films, 'author','asc');
    
    default:
     return films;
  } 
};

const filterFilms = (films, searchQuery) =>
  films.filter(
    o =>
    
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

  
  const searchFilms = (films, SortBy, searchQuery) => {
    return sortBy(filterFilms(films, searchQuery||""), SortBy);
  };



const mapStateToProps = ({ films, filter }) => ({
    films:films.items && searchFilms(films.items,filter.SortBy, filter.searchQuery),
    isReady: films.isReady,
  });

  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filmsActions,dispatch),
    ...bindActionCreators(SortActions,dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  