import React, { useState } from "react";
import "./bigfoot.scss";

const Bigfoot = (props) => {
  const { handleLogin } = props;
  const [email, setEmail] = useState("");
  const [emailLength, setEmailLength] = useState(10);
  const [password, setPassword] = useState("");
  const [passwordActive, setPasswordActive] = useState(false);

  const handleEmailLength = (length) => {
    const value = !isNaN(length) ? length : emailLength;
    if (value < 19) {
      setEmailLength(value);
    }
  };

  const handleFocusOut = () => {
    setEmailLength(10);
  };

  const handlePasswordOut = () => {
    setPasswordActive(false);
  };

  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
    handleEmailLength(value.length);
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordActive(true);
  };

  return (
    <div className="bigfoot-container">
      <div className="body-container">
        <div className="ear1"></div>
        <div className="ear2"></div>
        <div className="head"></div>
        <div className="eye-container" style={{ left: `${emailLength}px` }}>
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
        <form>
          <label>
            email
            <input
              type="text"
              name="email"
              placeholder="email@example.com"
              onChange={handleEmail}
              onFocus={handleEmailLength}
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
              onBlur={handlePasswordOut}
              onFocus={handlePassword}
            />
          </label>
        </form>
      </div>
      <div className="signin-bar">
        <div className="signin-text">sign in</div>
        {!passwordActive && <div className="left-paw"></div>}
        {!passwordActive && <div className="right-paw"></div>}
      </div>
      <div className="x" onClick={handleLogin}>
        x
      </div>
    </div>
  );
};

export default Bigfoot;
