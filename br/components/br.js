import React from 'react';
import propTypes from 'prop-types';

class Br extends React.Component {

 

 static propTypes = {
  
  };

 state =  {
   
  
  }



  render() {
   var z =[];
   var massBr = this.props.text.split("<br>");

  var line= massBr.forEach(function(element, i, arr) {
    if (i!=0){
      z.push(<br key={i}></br>);
      }
      z.push(element);
  });

    return (
     <div key="br">{z}</div>
      


    ) ; 




}


}
export default Br;