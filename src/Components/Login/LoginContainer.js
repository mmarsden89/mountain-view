import React, { useState } from "react";
import "./loginContainer.scss";
import LoginButton from "./LoginButton";

const LoginContainer = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="login-container">
      {!login && <LoginButton handleLogin={handleLogin} />}
    </div>
  );
};

export default LoginContainer;
