import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginDisabled,
    setLoginDisabled,
  } = useContext(LoginContext);

  // https://stackoverflow.com/questions/742451/what-is-the-simplest-regular-expression-to-validate-emails-to-not-accept-them-bl
  const REGEX_LOGIN = /\S+@\S+\.\S+/;
  const NUMBER_SIX = 6;
  const history = useHistory();

  const validation = () => {
    let setDisabled = false;
    setDisabled = !(REGEX_LOGIN.test(email) && password.length >= NUMBER_SIX);
    setLoginDisabled(setDisabled);
  };

  const handleInput = ({ target: { name, value } }) => {
    if (name === 'password-input') {
      setPassword(value);
    }
    if (name === 'email-input') {
      setEmail(value);
    }
    validation();
  };

  const handleSubmit = (event) => {
    // email setado para user devido ao requisito
    const user = {
      email,
    };
    const path = '/foods';
    event.preventDefault();
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(user));
    history.push(path);
  };

  return (
    <div>
      <fieldset>
        <label htmlFor="email-input">
          <input
            name="email-input"
            type="text"
            id="email-input"
            data-testid="email-input"
            placeholder="E-mail"
            onChange={ handleInput }
          />
          E-mail
        </label>
        <label htmlFor="password-input">
          <input
            name="password-input"
            type="password"
            id="password-input"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ handleInput }
          />
          Senha
        </label>
        <button
          data-testid="login-submit-btn"
          type="button"
          onClick={ handleSubmit }
          disabled={ loginDisabled }
        >
          Entrar
        </button>
      </fieldset>
    </div>
  );
}
