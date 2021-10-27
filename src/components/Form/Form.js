import { Button } from './Button/Button';
import { Wrapper } from './Form.styles';
import { Input } from './Input/Input';

const Form = () => {
  return (
    <Wrapper>
      <Input />
      <Button>Add task</Button>
    </Wrapper>
  );
};

export default Form;
