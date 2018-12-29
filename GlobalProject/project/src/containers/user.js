import Menu from '../componets/Menu';
import { connect } from 'react-redux';
import * as  CartActions  from '../actions/cart';
import {bindActionCreators} from 'redux'


  


const mapStateToProps = ({ user}) => ({
 
    userName:"dfdf",
  });
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(CartActions,dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);
  


  