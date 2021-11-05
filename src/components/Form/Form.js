import axios from 'axios';
import { useState, useContext } from 'react';
import { Button } from './Button/Button';
import { Wrapper } from './Form.styles';
import { InputGroup } from './InputGroup/InputGroup';
import { Input } from './Input/Input';
import { Error } from 'components/Error/Error';
import { TodoContext } from 'views/Root';

const Form = () => {
  const [error, setError] = useState('');
  const {
    setValue,
    setAlert,
    setTaskName,
    taskId,
    taskName,
    setVisibleEditBtn,
    visibleEditBtn,
  } = useContext(TodoContext);

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

        setError('');
        setValue(response.data);
        setAlert(response.data.message);

        setTaskName('');

        setTimeout(() => {
          setAlert('');
        }, 4000);
      } catch (e) {
        setError(e.response.data.errors.title[0]);
      }
    })();
  };

  const handlerEditSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axios.put(
          `https://obscure-anchorage-82867.herokuapp.com/api/tasks/${taskId}/edit`,
          {
            taskId,
            title: taskName,
          }
        );

        setError('');
        setValue(response.data);
        setAlert(response.data.message);
        setVisibleEditBtn(false);
        setTaskName('');

        setTimeout(() => {
          setAlert('');
        }, 4000);
      } catch (e) {
        setError(e.response.data.errors.title[0]);
      }
    })();
  };

  return (
    <Wrapper>
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

      {visibleEditBtn ? (
        <Button className="btn-edit" type="button" onClick={handlerEditSubmit}>
          Edit task
        </Button>
      ) : (
        <Button type="button" onClick={handlerSubmit}>
          Add task
        </Button>
      )}
    </Wrapper>
  );
};

export default Form;
