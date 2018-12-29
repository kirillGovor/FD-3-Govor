import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

import '../App.css';





const FilmCard = (film) => {
  const { title, author, price, image, addToCart,  addedCount, id} = film;
  return (


    <Card >

      <Image src={image} />

      <Card.Content>



        <Card.Header >

          <Link to={`/film${id}`}>{title} </Link>
        </Card.Header>



        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
       
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
