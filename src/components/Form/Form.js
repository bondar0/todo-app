import axios from 'axios';
import { useState, useContext } from 'react';
import { Button } from './Button/Button';
import { Wrapper } from './Form.styles';
import { InputGroup } from './InputGroup/InputGroup';
import { Input } from './Input/Input';
import { Alert } from 'components/Alert/Alert';
import { Error } from 'components/Error/Error';
import { TodoContext } from 'views/Root';

const Form = () => {
  const [taskName, setTaskName] = useState('');
  const [alert, setAlert] = useState('');
  const [error, setError] = useState('');
  const { setTodos } = useContext(TodoContext);

  const handlerInputChange = (e) => {
    e.preventDefault();
    setTaskName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axios.post(
          'https://obscure-anchorage-82867.herokuapp.com/api/tasks',
          {
            title: taskName,
          }
        );

        setTodos(response.data);
        setAlert(response.data.message);
        setTaskName('');

        if (alert !== null) {
          setTimeout(() => {
            setAlert('');
          }, 5000);
        }
      } catch (e) {
        setError(e.response.data.errors.title[0]);
      }
    })();
  };

  return (
    <Wrapper>
      {alert ? <Alert>{alert}</Alert> : null}
      <InputGroup>
        <Input
          className={error ? 'error' : null}
          value={taskName}
          onChange={handlerInputChange}
          onKeyPress={(e) => {
            e.key === 'Enter' && e.preventDefault();
          }}
        />
        {error ? <Error>{error}</Error> : null}
      </InputGroup>

      <Button type="button" onClick={handlerSubmit}>
        Add task
      </Button>
    </Wrapper>
  );
};

export default Form;
