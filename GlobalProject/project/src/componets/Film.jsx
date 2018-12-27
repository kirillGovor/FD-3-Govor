import React from 'react'
import { Card, Icon, Image, Button, Grid, Item } from 'semantic-ui-react';
import { Link } from 'react-router';




const FilmCard = (film) => {
  const { title, author, price, image, addToCart, text, addedCount, id, WrappedHome } = film;
  return (
    <div style={{ marginTop: 25 + 'px' }}>
      <Item.Group >
        <Item>
          <Item.Image src={image} />

          <Item.Content>
            <Item.Header >{title}</Item.Header>
            <Item.Extra>{author}</Item.Extra>
            <Item.Meta><p>{text}</p>
              <Link to="/"><br></br><br></br>
                <Button  primary>
                  Вернуться  </Button>
              </Link>
            </Item.Meta>


          </Item.Content>

        </Item>
        <Button onClick={addToCart.bind(this, film)} primary>
          Добавить в корзину {} </Button>

      </Item.Group>
    </div>
  );
};



export default FilmCard;
