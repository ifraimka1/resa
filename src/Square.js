import React from 'react';

const Square = ({ id, value, onClick }) => {  
  let className = "square";
  if (value === null) {
    className += " free";
  }
  return (
    <button id={"s" + id} className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
