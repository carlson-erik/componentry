import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderSummary from './index';

storiesOf('Components', module)
  .add('Order Summary', () => {
    return(
      <OrderSummary/>
    )
  });