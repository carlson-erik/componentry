import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  width: fit-content;
  display: flex;
  border: 1px #d0d0d0 solid;
  border-radius: 0.25rem;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
`;

const Column = styled.div`
padding: 1rem;
`;

const CartCheckout = (props) => {
  return (
    <Modal>
      <Column>left side</Column>
      <Column>right side</Column>
    </Modal>
  )
}

export default CartCheckout;