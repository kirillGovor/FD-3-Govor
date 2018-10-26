"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Bring from './Br';

str="<br>слово 1<br>слово 2<br>слово 3<br></br>"
ReactDOM.render(
  <Bring
    brStr={str}
  />
  , document.getElementById('container') 
);

