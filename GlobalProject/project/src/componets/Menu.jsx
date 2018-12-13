import React from 'react';
import { Menu, Button, Image, List, Popup } from 'semantic-ui-react';
import {Link } from 'react-router';
import Film from '../film'
    const CartComponent = ({title,id, image, removeFromCart }) => (
      
      <List  selection divided verticalAlign="middle">
      <List.Item >
        <List.Content  floated="right">
          <Button  onClick={removeFromCart.bind(this,id)} color="red">
            Удалить
          </Button>
        </List.Content>
        <Image  avatar src={image} />
        <Link className="header" to={{
        pathname: "/basket ",
        state: { title:{title},id:{id}, image:{image}, removeFromCart:{removeFromCart} }
      }} >
        <List.Content>{title}</List.Content>
        </Link>
      </List.Item>
    </List>
      
      
     
    
    );


    const MenuComponent = ({totalPrice, inBasket, items}) => (
        <Menu >
         <Link to="/">
        <Menu.Item name='browse'  > 
        Магазин фильмов
        </Menu.Item>
        </Link>
    
        <Menu.Menu position='right' >
          <Menu.Item name='signup' >
            Итого: &nbsp; <i>{totalPrice}</i> $
          </Menu.Item>


          <Popup
      trigger={

        <Menu.Item name='basket' >
            Корзина <i>({inBasket||"0"})</i>
          </Menu.Item>
      }
      content={items.map(film => <CartComponent key={film.id} {...film}/>)}
      on='click'
      hideOnScroll
    >
  
    </Popup>
    
     
    
         
        </Menu.Menu>
      </Menu>
    );
export default MenuComponent;

