import axios from 'axios';
import { useState, useContext } from 'react';
import { TodoContext } from 'views/Root';
import { Btn } from './Button.styles';

const Button = ({ todoId }) => {
  const [alert, setAlert] = useState('');
  const { setTodos } = useContext(TodoContext);

  const handlerRemove = () => {
    (async () => {
      try {
        const response = await axios.delete(
          `https://obscure-anchorage-82867.herokuapp.com/api/tasks/${todoId}`,
          {
            todoId,
          }
        );

        setTodos(response.data);
        console.log(response.data);

        if (alert !== null) {
          setTimeout(() => {
            setAlert('');
          }, 5000);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  };

  return (
    <>
      <Btn isDelete onClick={handlerRemove}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.775 0.224988C19.475 -0.0749961 18.989 -0.0749961 18.6891 0.224988L10 8.91407L1.31092 0.224988C1.01094 -0.0749961 0.524953 -0.0749961 0.224988 0.224988C-0.0749768 0.524972 -0.0749961 1.01096 0.224988 1.31092L8.91407 10L0.224988 18.6891C-0.0749961 18.9891 -0.0749961 19.475 0.224988 19.775C0.524972 20.075 1.01096 20.075 1.31092 19.775L10 11.0859L18.6891 19.775C18.9891 20.075 19.475 20.075 19.775 19.775C20.075 19.475 20.075 18.989 19.775 18.6891L11.0859 10L19.775 1.31092C20.075 1.01094 20.075 0.524953 19.775 0.224988Z"
            fill="#43464E"
          />
        </svg>
      </Btn>
      <Btn>
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.85593 15.9999C7.26565 15.9999 6.69678 15.7562 6.27527 15.3138L0.648324 9.40695C-0.216108 8.49953 -0.216108 7.01737 0.648324 6.11096C1.51276 5.20354 2.92469 5.20354 3.78815 6.11096L7.79249 10.3145L16.1388 0.757247C16.9604 -0.19425 18.3732 -0.260797 19.2786 0.62416C20.185 1.48663 20.2484 2.96971 19.4054 3.92015L9.49994 15.2481C9.09984 15.7131 8.50956 16 7.89786 16L7.85593 15.9999Z"
            fill="#43464E"
          />
        </svg>
      </Btn>
    </>
  );
};

export default Button;
