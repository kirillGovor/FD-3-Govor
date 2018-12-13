import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory, Route, Router } from 'react-router';






const FilmCard = (film) => {
  const { title, author, price, image, addToCart, text, addedCount, id, WrappedHome } = film;
  return (

   
    <Card >
   
      <Image src={image} />

      <Card.Content>



        <Card.Header >

          <Link to={{ pathname: `/film${id}` ,
        state: { title: { title }, id: { id }, image: { image }, price: { price }, author: { author }, }
        
        }}>  {author} </Link>


        </Card.Header>



        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
        <Card.Description>{text}</Card.Description>
      </Card.Content>
      <Card.Content extra>

        <Icon name='dollar' />
        {price}

      </Card.Content>

      <Button onClick={addToCart.bind(this, film)} primary>
        Добавить в корзину {addedCount > 0 && '(${addedCount})'} </Button>

    </Card>

  );
};



export default FilmCard;
