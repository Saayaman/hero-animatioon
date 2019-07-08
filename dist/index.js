import React from 'react';
import './MyComponent.css';

class MyComponent extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'MyComponent' },
      'This is MY COMPONENT!!!!!'
    );
  }
}

export default MyComponent;