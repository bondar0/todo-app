import { useState, useEffect } from 'react';
import { List, Paragraph } from './TodoList.styles';
import Todo from './Todo/Todo';
import axios from 'axios';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://obscure-anchorage-82867.herokuapp.com/api/tasks'
        );
        setTodo(response.data.data);
      } catch (e) {
        setError('No defined tasks');
      }
    })();
  }, []);

  return (
    <List>
      {todo.length > 0 ? (
        todo.map((data) => <Todo key={data.id}>{data.title}</Todo>)
      ) : (
        <Paragraph>{error ? error : 'Loading ...'}</Paragraph>
      )}
    </List>
  );
};

export default TodoList;
