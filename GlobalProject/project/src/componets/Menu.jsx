import React from 'react';
import { Menu } from 'semantic-ui-react';





    const MenuComponent = ({totalPrice, inBasket}) => (
        <Menu >
        <Menu.Item name='browse'  >
          Магазин фильмов
        </Menu.Item>

    
        <Menu.Menu position='right' >
          <Menu.Item name='signup' >
            Итого: &nbsp; <i>{totalPrice}</i> $
          </Menu.Item>

          <Menu.Item name='basket' >
            Корзина <i>({inBasket||"0"})</i>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
export default MenuComponent;

