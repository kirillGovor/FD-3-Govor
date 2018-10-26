
import React from 'react';
import ReactDOM from 'react-dom';

import Br from './components/br';
    
    
    
    var text='<br>word1<br>word2<br>word3';
      var shopArr=require('./data.json');

      ReactDOM.render(
        <Br
        text={text}
        />
       ,
       
        document.getElementById('container') 
      );
      
    



   