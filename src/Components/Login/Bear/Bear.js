import React, { useState, useEffect } from "react";
import "./bear.scss";

const Bear = (props) => {
  const { handleLogin } = props;
  const [email, setEmail] = useState("");
  const [emailLength, setEmailLength] = useState(1);
  const [password, setPassword] = useState("");
  const [passwordActive, setPasswordActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [errorActive, setErrorActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "please enter your email/password"
  );

  useEffect(() => {}, [emailActive, errorMessage, password]);

  const handleEmailLength = (length) => {
    const value = !isNaN(length) ? length : emailLength;
    if (value < 19) {
      setEmailLength(value);
    }
  };

  const handleFocusOut = () => {
    setErrorActive(false);
    setEmailActive(false);
  };

  const handlePasswordOut = () => {
    setErrorActive(false);
    setPasswordActive(false);
  };

  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
    handleEmailLength(value.length);
    setEmailActive(true);
    setErrorActive(false);
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordActive(true);
    setErrorActive(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@") || !email.includes(".com")) {
      setErrorMessage("please enter a valid email address");
      setErrorActive(true);
    } else if (!password.length > 0) {
      setErrorMessage("please enter a valid password");
      setErrorActive(true);
    } else {
      setErrorMessage(false);
    }
    setPasswordActive(false);
  };

  return (
    <div className="bigfoot-container">
      <div className="body-container">
        <div className="ear1"></div>
        <div className="ear2"></div>
        <div className="head"></div>
        <div
          className="eye-container"
          style={{
            left: `${emailActive ? emailLength : 10}px`,
            top: `${emailActive ? 65 : 60}px`,
          }}
        >
          <div className="eye1"></div>
          <div className="eye2"></div>
        </div>
        <div className="mouth-container">
          <div className="nose"></div>
          <div className="mouth-line"></div>
          <div className="mouth"></div>
        </div>
        {passwordActive && (
          <div className="password-paw-container">
            <div className="password-paw-left"></div>
            <div className="password-paw-right"></div>
          </div>
        )}
      </div>
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <label>
            email
            <input
              type="text"
              name="email"
              placeholder="email@example.com"
              onChange={handleEmail}
              onFocus={handleEmail}
              onBlur={handleFocusOut}
            />
          </label>
          <label>
            password
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handlePassword}
              onFocus={handlePassword}
              onBlur={handlePasswordOut}
            />
          </label>
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
      <div className="signin-bar" onClick={handleSubmit}>
        <div className="signin-text">sign in</div>
        {!passwordActive && <div className="left-paw"></div>}
        {!passwordActive && <div className="right-paw"></div>}
      </div>
      <div className="x" onClick={handleLogin}>
        x
      </div>
      {errorActive && (
        <div className="error-message-container">
          <div className="error-message">{errorMessage}</div>
        </div>
      )}
    </div>
  );
};

export default Bear;
