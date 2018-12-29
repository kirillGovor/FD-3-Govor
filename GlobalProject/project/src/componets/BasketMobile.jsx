import '../App.css';
import React from 'react';
import {  Button, Image, List, } from 'semantic-ui-react';
import { Link } from 'react-router';


import logoBasket from '../empty-cart.jpg';
const CartComponent = ({ title, id, image, removeFromCart }) => (

    <List selection divided verticalAlign="middle">
        <List.Item >
            <List.Content floated="right">
                <Button onClick={removeFromCart.bind(this, id)} color="red">
                    Удалить
          </Button>
            </List.Content>
            <Image avatar src={image} />
            <Link to={`/film${id}`}>

                <List.Content>{title}</List.Content>
            </Link>
        </List.Item>
    </List>




);


const MenuComponent = ({ items }) => (
    <div>

        <h3>Ваша Корзина:</h3>
        {items == 0 ? <div className="blockVAsketMobile"><h4>Корзина пуста :(</h4><img  className="basketImg" src={logoBasket}></img></div> : items.map(film => (
            <CartComponent key={film.id} {...film} />
        ))
        }



        <br></br>
        <Link to='/'><Button primary className="BasketMobileButton">
            Вернуться в каталог </Button>
        </Link>

    </div>



);
export default MenuComponent;

