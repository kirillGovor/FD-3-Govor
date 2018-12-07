import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Createstore from './store';
import 'semantic-ui-css/semantic.min.css';
import './block.css';

const store = Createstore();


ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,


    document.getElementById('root')


);
