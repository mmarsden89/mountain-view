import React, { useState } from "react";
import "./loginContainer.scss";
import LoginButton from "./LoginButton";
import Bigfoot from "./Bigfoot/Bigfoot";

const LoginContainer = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="login-container">
      {!login && <LoginButton handleLogin={handleLogin} />}
      {login && <Bigfoot handleLogin={handleLogin} />}
    </div>
  );
};

export default LoginContainer;
