import React from 'react';
import { storiesOf } from '@storybook/react';
import CartCheckout from './index';

storiesOf('Components', module)
  .add('CartCheckout', () => {
    return(
      <CartCheckout/>
    )
  });