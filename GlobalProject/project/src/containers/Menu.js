import Menu from '../componets/Menu';
import { connect } from 'react-redux';
import * as  CartActions  from '../actions/cart';
import {bindActionCreators} from 'redux'
import uniqBy from 'lodash/uniqBy'
import { Card } from 'semantic-ui-react';

  


const mapStateToProps = ({ cart,user }) => ({
  totalPrice: cart.items.reduce((total,film) => total+ film.price, 0),
  inBasket: cart.items.length,
  items:uniqBy(cart.items, o => o.id),
  userName:user,

  });
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(CartActions,dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);
  


  