import { useState, useEffect, useContext } from 'react';
import { List, Paragraph } from './TodoList.styles';
import Todo from './Todo/Todo';
import axios from 'axios';
import { TodoContext } from 'views/Root';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(null);
  const { todos, alert } = useContext(TodoContext);

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
  }, [todos, alert]);

  return (
    <List>
      {todo.length > 0 ? (
        todo.map((data) => (
          <Todo id={data.id} key={data.id}>
            {data.title}
          </Todo>
        ))
      ) : (
        <Paragraph>{error ? error : 'Loading ...'}</Paragraph>
      )}
    </List>
  );
};

export default TodoList;
