import React from 'react';
import styled from 'styled-components';
import {Title, Container} from './index.styled';

const List = styled.ul`
  padding: 0.5rem;
  margin: 0;
`;

const Item = styled.li`
  list-style: none;
  padding: 0.25rem;
  width: 100%;
  display:flex;
`;

const Name = styled.span``;

const Price = styled.span`
  flex-grow: 1;
  text-align: end;
`;

const CartItem = (props) => {
  return (
    <Item>
      <Name>{props.name}</Name>
      <Price>${props.price}</Price>
    </Item>
  )
}

const CartList = (props) => {
  const {cart} = props;
  return (
    <Container>
      <Title>Order Summary</Title>
      <List>
        {cart.map(value => <CartItem key={value.id} {...value} />)}
      </List>
    </Container>
  );
};

export default CartList;