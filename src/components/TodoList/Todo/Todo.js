import { ListItem } from './Todo.styles';
import { TodoName } from './TodoName/TodoName';
import Button from './Button/Button';

const Todo = ({ children, id }) => {
  return (
    <ListItem>
      <TodoName>{children}</TodoName>
      <Button todoId={id} />
    </ListItem>
  );
};

export default Todo;
