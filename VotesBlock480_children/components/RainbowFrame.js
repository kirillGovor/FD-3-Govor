import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
   
  };
  
  render() {
    var atr=this.props.children;
    var colorg = this.props.color.forEach(element => {
      atr=<div style={{border:"dashed 1px "+String(element.color),padding:"1px"}}>{atr}</div>
    });
    return (
      /*
      <div style={{border:"dashed 1px "+this.props.color[0].color,padding:"10px"}}>
        {this.props.children}
      </div>
      */
     atr
    );
  }

}

export default RainbowFrame;
