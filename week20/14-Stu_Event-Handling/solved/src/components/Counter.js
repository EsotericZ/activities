import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// exports Counter as the default function
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // setting the initial value of the variable count and setting the function so you can update it
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // updating the state with it's current value plus 1
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // updating the state with it's current value minus 1
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
