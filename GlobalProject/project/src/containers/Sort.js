import Sort from '../componets/Sort';
import { connect } from 'react-redux';
import * as  SortActions  from '../actions/Sort';
import {bindActionCreators} from 'redux'



const mapStateToProps = ({ films, filter }) => ({
    SortBy: filter.SortBy,
  });
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(SortActions,dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Sort);
  