import React from 'react';
import { List } from 'semantic-ui-react';

export const TodoList = (props) => {
  return (
    <List>
      {props.items.map((item, index) => (
        <List.Item key={index}>
          <List.Content floated='right'>
            <button onClick={() => props.deleteItem(index)}>
              X
            </button>
          </List.Content>
          <List.Content>
            <List.Checkbox
              checked={item.completed}
              onChange={() => props.toggleItemCompleted(index)}
            />
            {item.text}
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};
