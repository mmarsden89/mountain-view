const LoginButton = (props) => {
  const { handleLogin } = props;
  return (
    <div className="login-button-container">
      <button className="login-button" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};

export default LoginButton;
