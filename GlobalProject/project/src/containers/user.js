import Menu from '../componets/Menu';
import { connect } from 'react-redux';
import * as  CartActions  from '../actions/user';
import {bindActionCreators} from 'redux'
import uniqBy from 'lodash/uniqBy'



const mapStateToProps = ({ user }) => ({
  userName:user
  });
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(CartActions,dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);
  


  