
import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/ishop';
    
    
    
    var text='список товаров';
      var shopArr=require('./data.json');

      ReactDOM.render(
        <Ishop
        catalog={shopArr}
        text={text}
        />
       ,
       
        document.getElementById('container') 
      );
      
    



   