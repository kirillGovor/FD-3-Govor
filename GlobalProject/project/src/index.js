import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Createstore from './store';
import 'semantic-ui-css/semantic.min.css';
import './block.css';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory,Route,Router} from 'react-router';
import film from './film' 
import basket from './basket' 
import s from './componets/FilmCart' 
const store = Createstore();
const history =syncHistoryWithStore(hashHistory,store);


ReactDOM.render(
   
    <Provider store={store}>
    
    <Router history={history}>
    <Route path="/" component ={App}></Route>
    <Route path='/basket' component={basket}></Route>
    <Route path="/film:id" component={film}></Route>
    </Router>
       
    </Provider>,


    document.getElementById('root')


);
