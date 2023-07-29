// import * as yup from "yup";
import { useState } from "react";
import "./App.css";

const sendData = (data) => {
  console.log(data);
};

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [secondPass, setSecondPass] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    sendData({ email, password });
  };

  const onPasswordChang = ({ target }) => {
    setPassword(target.value);
  };

  const onPasswordBlure = ({ target }) => {
    let error = null;
    if (password.length < 4) {
      error = "Пароль должне быть от четырех символов.";
    }
    if (!/\d/.test(target.value)) {
      error = "Пароль должен содержать хотя бы одну цифру.";
    }
    if (!/[a-z]/.test(target.value)) {
      error = "Пароль должен содержать хотя бы одну строчную букву.";
    }
    if (!/[A-Z]/.test(target.value)) {
      error = "Пароль должен содержать хотя бы одну заглавную букву.";
    }

    setPasswordError(error);
  };

  const onSecondPasswordChang = ({ target }) => {
    setSecondPass(target.value);
  };

  const onSecondPasswordBlure = ({ target }) => {
    let error = null;

    if (password !== secondPass) {
      error = "Пароли должны совпадать.";
    }

    setPasswordError(error);
  };

  return (
    <div className="App">
      {/* {error && <div className="error_message">{error}</div>} */}
      <div className="wrapper">
        <h3>Registration form</h3>

        <form onSubmit={onSubmit}>
          <div className="label">Email: </div>

          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          ></input>

          <br></br>

          <div className="label">Password: </div>
          <input
            type="password"
            name="password"
            value={password}
            onBlur={onPasswordBlure}
            onChange={onPasswordChang}
          ></input>

          <br></br>

          <div className="label">Repeat password: </div>
          <input
            type="password"
            value={secondPass}
            onBlur={onSecondPasswordBlure}
            onChange={onSecondPasswordChang}
          ></input>

          <br></br>

          <button
            className="button"
            type="submit"
            disabled={passwordError !== null}
          >
            Registrations
          </button>
        </form>

        {passwordError && (
          <div className="error_password_message">{passwordError}</div>
        )}
      </div>
    </div>
  );
};

export default App;
