import { ListItem } from './Todo.styles';
import { TodoName } from './TodoName/TodoName';
import Button from './Button/Button';

const Todo = ({ children }) => {
  return (
    <ListItem>
      <TodoName>{children}</TodoName>
      <Button />
    </ListItem>
  );
};

export default Todo;
