import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderSummary from './index';

storiesOf('Components', module)
  .add('Order Summary', () => {
    const onSubmit = () => alert('onSubmit of Modal');
    const onCancel = () => alert('onCancel of Modal');
    return (
      <OrderSummary onSubmit={onSubmit} onCancel={onCancel}/>
    );
  });