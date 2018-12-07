import React from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react';

const FilmCard = (film) => {
  const {title,author,price,image,addToCart,text,addedCount } = film;
 return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
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
      Добавить в корзину {addedCount >0 && '(${addedCount})'} </Button>
    </Card>
  );
};
 


export default FilmCard;
