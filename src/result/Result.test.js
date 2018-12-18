import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const sides = [5, 5, 5];

  ReactDOM.render(<Result sides={sides}/>, div);


  ReactDOM.unmountComponentAtNode(div);
});