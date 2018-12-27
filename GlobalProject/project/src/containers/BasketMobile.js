import Basket from '../componets/BasketMobile';
import { connect } from 'react-redux';
import * as  CartActions  from '../actions/cart';
import {bindActionCreators} from 'redux'
import uniqBy from 'lodash/uniqBy'


const mapStateToProps = ({ cart }) => ({
   
  totalPrice: cart.items.reduce((total,film) => total+ film.price, 0),
  inBasket: cart.items.length,
  items:uniqBy(cart.items, o => o.id),
  });
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(CartActions,dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Basket);
  


  