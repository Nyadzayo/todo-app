import React, { useState } from 'react';
import {TodoList} from './TodoList';
import {TodoForm} from './TodoForm';

const App = () => {
  const [items, setItems] = useState([
    { text: 'Task 1', completed: false, key: '1' },
    { text: 'Task 2', completed: false, key: '2' },
    { text: 'Task 3', completed: true, key: '3' },
  ]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });

  const handleInputChange = (e) => {
    setCurrentItem({ text: e.target.value, key: Date.now() });
  };

  const addItem = (e) => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== '') {
      setItems([...items, newItem]);
      setCurrentItem({ text: '', key: '' });
    }
  };

  const deleteItem = (key) => {
    setItems(items.filter((item) => item.key !== key));
  };

  const toggleItemCompleted = (key) => {
    setItems(
      items.map((item) => {
        if (item.key === key) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <TodoForm
        addItem={addItem}
        currentItem={currentItem}
       
        handleInputChange={handleInputChange}
        />
        <TodoList
          items={items}
          deleteItem={deleteItem}
          toggleItemCompleted={toggleItemCompleted}
        />
      </div>
    );
  };
  
  export default App;
  