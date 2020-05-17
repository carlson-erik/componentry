import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import OrderSummary from './index';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Order Summary', () => {
    const label = 'Modal Width';
    const defaultValue = 550;
    const options = {
      range: true,
      min: 100,
      max: 1200,
      step: 5,
    };
    const groupId = 'GROUP-ID1';

    return (
      <OrderSummary 
        modalWidth={number(label, defaultValue, options, groupId)}
        onSubmit={action('Modal onSubmit')}
        onCancel={action('Modal onCancel')}
      />
    );
  });