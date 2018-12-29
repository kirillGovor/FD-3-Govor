import React from 'react';
import Menu from '../containers/Menu';
import Backbone from 'backbone';
import {  Button } from 'semantic-ui-react';
import '../App.css';

import { Link } from 'react-router';
const OktaSignIn = require('@okta/okta-signin-widget/dist/js/okta-sign-in.min.js');
export default class LoginPage extends React.Component {

  constructor() {
    super();
    this.state = { user: null };
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-326071.oktapreview.com',
      clientId: '0oaiiv2utlEBiY21D0h7',
      redirectUri: 'http://localhost:3000',
    });

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount...');
    this.widget.session.get((response) => {
      if (response.status !== 'INACTIVE') {
        this.setState({ user: response.login });
      } else {
        this.showLogin();
      }
    });
  }

  showLogin() {
    console.log('showLogin...')
    Backbone.history.stop();
    this.widget.renderEl({ el: this.loginContainer },
      (response) => {
        this.setState({ user: response.claims.email });
        this.widget.remove();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout() {
    console.log('logout...');
    this.widget.signOut(() => {
      this.setState({ user: null });
      this.showLogin();
    });
  }

  render() {
    console.log('rendering...');
    return (
      <div>
       
        <div>
          {this.state.user ? (
          

            <div>
              <Menu {...this.state}></Menu>
           <p> Здравствуйте,{this.state.user}</p>
           <p>Вы успешно Вошли</p>
           <Button primary onClick= {this.logout}>  Выйти</Button>
           <Link to='/' > <Button primary> Вернуться в  каталог</Button></Link>
          </div>
           
          ) : null}


          {this.state.user ? null : (
           <div>  <div ref={(div) => { this.loginContainer = div; }} > </div>  <a className="RegrLink" href="https://dev-326071.oktapreview.com/signin/register">Зарегестрироваться</a> </div>
           
          )}
        </div>
      </div>
    );
  }
}