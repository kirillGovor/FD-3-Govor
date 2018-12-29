import '../App.css';
import React from 'react';
import { Menu, Button, Image, List, Popup } from 'semantic-ui-react';
import { Link } from 'react-router';
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
const Login =(user)=>{
  if (user!=undefined){
    let loginUser=user;
    return loginUser;
  }
   else{
    return undefined;
   }
  
}

const MenuComponent = ({ totalPrice, inBasket, items,user,NewUser,userName }) => (
  
  <Menu >

    <Menu.Item name='browse'  >
      <Link to="/">  Магазин фильмов</Link>
    </Menu.Item>

  

    <Menu.Menu position='right' >

   


      
      <Link to={`/login`}>
      <Menu.Item>
        <Button onClick={ NewUser.bind(user)}>
        { Login(user) || "Войти"}
        </Button>
      </Menu.Item>
      </Link>

      <Menu.Item name='signup' >
        Итого: &nbsp; <i>{totalPrice}</i> $
          </Menu.Item>

     

      <Popup
        trigger={

          <Menu.Item name='basket' >
            Корзина <i>({inBasket || "0"})</i>
          </Menu.Item>
        }

        content={items.map(film => <CartComponent key={film.id} {...film} />)}
        on='click'
        hideOnScroll
      >

      </Popup>




    </Menu.Menu>
  </Menu>
);
export default MenuComponent;

