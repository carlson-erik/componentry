import React from 'react';
import styled from 'styled-components';
// --------- Components ---------
import OrderDetails from './components/order-details';
import DeliveryInfo from './components/delivery';
import ProgressionBar from './components/progress-bar';
import SubmitBar from './components/submit-bar';
// --------- Data ---------
import {progressionItems, dataModel} from './data';

const Modal = styled.div`
  width: ${props => props.width || '600'}px;
  border: 1px #d0d0d0 solid;
  border-radius: 0.25rem;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.20);
  padding: 0 0.5rem 0.5rem 0.5rem;
  font-family: 'Karla', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsContainer = styled.div`
  width: ${props => props.width || '100'}%;
`;

const ProgressionContainer = styled.div`
  width: 95%;
  padding: 1.5rem 0 1.5rem 0;
  border-bottom: 1px #d0d0d0 solid;
`;

const SubmitContainer = styled.div`
  width: 95%;
  padding: 1.5rem 0 1rem 0;
  border-top: 1px #d0d0d0 solid;
`;

const OrderSummary = (props) => {
  const {onSubmit, onCancel, modalWidth} = props;
  const {cart, order} = dataModel;
  return (
    <Modal width={modalWidth}>
      <ProgressionContainer>
        <ProgressionBar items={progressionItems} />
      </ProgressionContainer>
      <ContentContainer>
        <DetailsContainer width={80}>
          <OrderDetails cart={cart}/>
        </DetailsContainer>
        <DeliveryInfo {...order}/>
      </ContentContainer>
      <SubmitContainer>
        <SubmitBar onSubmit={onSubmit} onCancel={onCancel}/>
      </SubmitContainer>
    </Modal>
  )
};

export default OrderSummary;