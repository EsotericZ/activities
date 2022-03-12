import React from 'react';

function List({ groceries }) {
  return (
    <ul className="list-group">
      {
        groceries.map((item, index) => {
          return (
            <li 
              key={ item.id }
              style={{
                color: item.purchased ? 'blue' : 'red'
              }}
            >
              { item.name }
            </li>
        );
      })}
    </ul>
  );
};

export default List;