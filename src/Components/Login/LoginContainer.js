import React, { useState } from "react";
import "./loginContainer.scss";
import LoginButton from "./LoginButton";
import Bear from "./Bear/Bear";

const LoginContainer = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="login-container">
      {!login && <LoginButton handleLogin={handleLogin} />}
      {login && <Bear handleLogin={handleLogin} />}
    </div>
  );
};

export default LoginContainer;
