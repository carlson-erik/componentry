import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const App = (props) => {
  return(
    <div>look at storybook for all the work in this repo</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);