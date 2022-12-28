import React from 'react';
import { Form } from 'semantic-ui-react';

export const TodoForm = (props) => {
  return (
    <Form onSubmit={props.addItem}>
      <Form.Input
        placeholder='Add a todo item'
        value={props.currentItem.text}
        onChange={props.handleInputChange}
      />
      <Form.Button content='Add' />
    </Form>
  );
};

