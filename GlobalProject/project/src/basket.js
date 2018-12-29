import React from 'react'
import { Image, List, } from 'semantic-ui-react';
const Basket = ({title,id, image, removeFromCart}) => (
  <List  selection divided verticalAlign="middle">
  <List.Item >
    <List.Content  floated="right">
     
    </List.Content>
    <Image  avatar src={image} />
    <List.Content>{title}</List.Content>
  </List.Item>
</List>
);

export default Basket;
