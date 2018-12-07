import Menu from '../componets/Menu';
import { connect } from 'react-redux';
import * as  CartActions  from '../actions/cart';
import {bindActionCreators} from 'redux'



const mapStateToProps = ({ cart }) => ({
   
  totalPrice: cart.items.reduce((total,film) => total+ film.price, 0),
  inBasket: cart.items.length,
  });
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(CartActions,dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);
  


  