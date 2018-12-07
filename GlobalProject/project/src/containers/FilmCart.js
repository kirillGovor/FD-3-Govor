
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as  CartActions  from '../actions/cart';
import FilmCard from '../componets/FilmCart.jsx';



const mapStateToProps = ({ cart},{id}) =>({ 
  
  addedCount:cart.items.reduce(
    ( count, film) => count + (film.id === id ? 1:0),
    0)
  });
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(CartActions,dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);
  