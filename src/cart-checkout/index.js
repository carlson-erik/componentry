import React from 'react';
import styled from 'styled-components';
// --------- Components ---------
import OrderSummary from './components/order-summary';
import DeliveryInfo from './components/delivery';

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
    {
      id: 'skittles-lb-bag',
      name: 'Skittles (1lb)',
      price: 25.99,
    },
    {
      id: 'razer-laptop',
      name: 'Razer Blade Stealth (13in)',
      price: 1859.99,
    },
  ],
  order : {
    name: {
      first: 'Erik',
      last: 'Carlson',
    },
    address: {
      street: '123 Lorem Ipsum Lane',
      town: 'Dover',
      state: 'NH',
      country: 'US',
      zip: '03820',
    },
    contact: {
      phone: '(603)-553-8099',
      email: 'carlsonerikw@gmail.com',
    }
  },
  payment: {},
};

const CartCheckout = () => {
  const {cart, order} = dataModel;
  return (
    <Modal>
      <Column width={60}>
        <OrderSummary cart={cart}/>
      </Column>
      <Column width={40}>
        <DeliveryInfo {...order}/>
      </Column>
    </Modal>
  )
}

export default CartCheckout;