import { useState, useRef } from "react";
import "./App.css";
import {
  emailChangeScheme,
  passwordChangeScheme,
  passwordBlureScheme,
  validateAndGetErrorMessage,
} from "./schemes";

const sendData = (data) => {
  console.log(data);
};

const App = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [secondPass, setSecondPass] = useState("");

  const submitButtonRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    sendData({ email, password });
  };

  const onEmailChange = ({ target }) => {
    setEmail(target.value);

    const error = validateAndGetErrorMessage(emailChangeScheme, target.value);

    setEmailError(error);
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);

    const error = validateAndGetErrorMessage(
      passwordChangeScheme,
      target.value
    );

    setPasswordError(error);
  };

  const onPasswordBlure = () => {
    const error = validateAndGetErrorMessage(passwordBlureScheme, password);

    setPasswordError(error);
  };

  const onSecondPasswordChange = ({ target }) => {
    setSecondPass(target.value);
    if (password === secondPass) {
      submitButtonRef.current.focus();
    }
  };

  const onSecondPasswordBlure = () => {
    let error = null;

    if (password !== secondPass) {
      error = "Пароли должны совпадать.";
    }

    setPasswordError(error);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h3>Registration form</h3>
        <form onSubmit={onSubmit}>
          <div className="label">Email: </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onEmailChange}
          />
          <br></br>
          <div className="label">Password: </div>
          <input
            type="password"
            name="password"
            value={password}
            onBlur={onPasswordBlure}
            onChange={onPasswordChange}
          />
          <br></br>
          <div className="label">Repeat password: </div>
          <input
            type="password"
            value={secondPass}
            onBlur={onSecondPasswordBlure}
            onChange={onSecondPasswordChange}
          />
          <br></br>
          <button
            ref={submitButtonRef}
            className="button"
            type="submit"
            disabled={
              password === "" ||
              email === "" ||
              secondPass === "" ||
              passwordError !== null ||
              emailError !== null
            }
          >
            Registrations
          </button>
        </form>
        {emailError && (
          <div className="error_password_message">{emailError}</div>
        )}
        {passwordError && (
          <div className="error_password_message">{passwordError}</div>
        )}
      </div>
    </div>
  );
};

export default App;
