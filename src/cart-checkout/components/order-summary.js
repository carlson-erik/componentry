import React from 'react';
import styled from 'styled-components';
import {H3Title, Container, H5Title} from '../index.styled';

const List = styled.ul`
  padding: 0.5rem;
  margin: 0;
`;

const Item = styled.li`
  list-style: none;
  padding: 0.25rem;
  width: 100%;
  display:flex;
  line-height: 1.5;
`;

const Name = styled.span`
`;

const Price = styled.span`
  flex-grow: 1;
  text-align: end;
  font-size: 14px;
`;

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const TotalPriceLabel = styled(H5Title)`
  padding-right: 0.25rem;
`;

const TotalPrice =styled.span`
  font-size: 14px;
`;

const CartItem = (props) => {
  return (
    <Item>
      <Name>{props.name}</Name>
      <Price>${props.price}</Price>
    </Item>
  )
}

const OrderSummary = (props) => {
  const {cart} = props;
  let total = 0;
  cart.forEach(({price}) => {total += price;});
  return (
    <Container>
      <H3Title>Order Summary</H3Title>
      <List>
        {cart.map(value => <CartItem key={value.id} {...value} />)}
      </List>
      <TotalPriceContainer noLeftPadding>
        <TotalPriceLabel>Total Price:</TotalPriceLabel>
        <TotalPrice> ${total}</TotalPrice>
      </TotalPriceContainer>
    </Container>
  );
};

export default OrderSummary;