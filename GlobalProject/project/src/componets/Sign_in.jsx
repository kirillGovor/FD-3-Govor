import React from 'react';
import { Menu, Button, Input, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router';




const MenuComponent = ({ }) => (
    <div>
        <Container>
            <Menu >

                <Menu.Item name='browse'  >
                    <Link to="/">  Магазин фильмов</Link>
                </Menu.Item>
                <Menu.Menu position='right' >
                </Menu.Menu>
            </Menu>
            <div className="login">
            <h1>Вход</h1>
                <label>Логин </label><br></br>
                <Input type="email" iconPosition='left' placeholder='Email'>
                    <Icon name='at' />
                    <input />
                </Input><br></br>
                <label>Пароль </label><br></br>
                <Input type="password" iconPosition='left' placeholder='Password'>
                    <Icon name='lock' />
                    <input />
                </Input>
                <br></br>
                <br></br>
                <Menu.Item >
                    <Button primary type="submit">Вход</Button>
                    <Link to={`/registration`}>
                    <Button primary>Регистрация</Button>
                    </Link>
                </Menu.Item>

            </div>
        </Container>
    </div>
);
export default MenuComponent;

