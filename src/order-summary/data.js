const statuses = {
  INACTIVE : 'inactive',
  ACTIVE: 'active',
  COMPLETE : 'complete',
};

const progressionItems = [
  {
    name:'Order',
    status: statuses.COMPLETE,
  }, 
  {
    name:'Payment',
    status: statuses.COMPLETE,
  }, 
  {
    name:'Review',
    status: statuses.ACTIVE,
  },
  {
    name:'Survey',
    status: statuses.INACTIVE,
  },
];

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
      email: 'carlsonerikw@example.com',
    }
  },
  payment: {},
};

export {
  dataModel,
  statuses,
  progressionItems,
}