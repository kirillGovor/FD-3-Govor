import React from 'react'
import { Link } from 'react-router';
import { Menu, Button, Image, List, Popup, Card, Icon, Container } from 'semantic-ui-react';
import { hashHistory, Route, Router } from 'react-router';
import Menux from './containers/Menu';


const Film = ({ title, id, image, author, text, price }) => (
  <Container>
    <Menux />

    <Card >

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

    </Card>
  </Container>
);

export default Film;
