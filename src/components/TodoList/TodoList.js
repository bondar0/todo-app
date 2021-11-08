import { useState, useEffect, useContext } from 'react';
import { List, Paragraph } from './TodoList.styles';
import Todo from './Todo/Todo';
import axios from 'axios';
import { TodoContext } from 'views/Root';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { value } = useContext(TodoContext);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://obscure-anchorage-82867.herokuapp.com/api/tasks'
        );
        setTodo(response.data.data);
        setIsLoading(false);
      } catch (e) {
        setError('No defined tasks');
      }
    })();
  }, [value]);

  return (
    <List className={isLoading ? 'loading' : null}>
      {todo.length > 0 ? (
        todo.map((data) => (
          <Todo id={data.id} key={data.id}>
            {data.title}
          </Todo>
        ))
      ) : error ? (
        <Paragraph>error</Paragraph>
      ) : null}
    </List>
  );
};

export default TodoList;
