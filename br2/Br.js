import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class Bring extends React.Component {
  
    
    static propTypes = {
     
    };
  
    state = {
     
    }
  
  
    render() {
  var massBr=this.props.BrStr.split("<br>");
    console.log(massBr)
  
      return (
        <div></div>
      )
      ;
  
    }
  
  }
  
  export default Bring;
  