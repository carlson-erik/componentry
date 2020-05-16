import React from 'react';
import styled from 'styled-components';
// --------- Components ---------
import CartList from './components/cart-list';

const Modal = styled.div`
  width: 600px;
  display: flex;
  border: 1px #d0d0d0 solid;
  border-radius: 0.25rem;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
  padding: 0.5rem;
  font-family: 'Karla', sans-serif;
`;

const Column = styled.div`
  width: ${props => props.width || '100'}%;
`;

const dataModel = {
  cart: [
    {
      id: 'dot-grid-journal',
      name: 'Dot Grid Journal Notebook',
      price: 29.99,
    },
    {
      id: 'office-chair',
      name: 'Office Chair',
      price: 400.99,
    },
    {
      id: 'iphone-xr-case',
      name: 'iPhone Xr Case',
      price: 20.99,
    },
    {
      id: 'apple-iphone-xr',
      name: 'Apple iPhone Xr',
      price: 709.99,
    },
  ],
  user : {
    firstName: 'Erik',
    lastName: 'Carlson',
    address: '123 Lorem Ipsum Lane',
    town: 'Dover',
    countryCode: 'US',
    zip: '03820'
  },
  payment: {},
};

const CartCheckout = () => {
  const {cart} = dataModel;
  return (
    <Modal>
      <Column width={50}>
        <CartList cart={cart}/>
      </Column>
      <Column width={50}>right side</Column>
    </Modal>
  )
}

export default CartCheckout;