
import React from 'react';
import ReactDOM from 'react-dom';

import ishop from './components/ishop';
    
    
    
    var text='список товаров';
      var shopArr=require('./data.json');
      ReactDOM.render(
        React.createElement(ishop,{MainText:text,catalog:shopArr}), 
       
        document.getElementById('container') 
      );
      
    



   