import React from 'react';

const Input = (props) => {
  return (
    <form name="form" onSubmit={onClick}>
      <label>Name </label>
      <input type="text" name="item" placeholder="Your item"></input>
      <br />
      <label>Value </label>
      <input type="text" name="value" placeholder="Value of item"></input>
      <br />
      <button type="submit">Click Me!</button>
    </form>
  );
};

onClick(){
    
}

export default Input;
