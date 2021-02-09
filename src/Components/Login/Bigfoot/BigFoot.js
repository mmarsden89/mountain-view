import "./bigfoot.scss";

const Bigfoot = (props) => {
  const { handleLogin } = props;
  return (
    <div className="bigfoot-container">
      <div className="body-container">
        <div className="ear1"></div>
        <div className="ear2"></div>
        <div className="head"></div>
        <div className="eye-container">
          <div className="eye1"></div>
          <div className="eye2"></div>
        </div>
        <div className="mouth-container">
          <div className="nose"></div>
          <div className="mouth-line"></div>
          <div className="mouth"></div>
        </div>
      </div>
      <div className="signin-form">
        <form>
          <label>
            email
            <input type="text" name="email" placeholder="email@example.com" />
          </label>
          <label>
            password
            <input type="password" name="password" placeholder="password" />
          </label>
        </form>
      </div>
      <div className="signin-bar">
        <div className="signin-text">sign in</div>
        <div className="left-paw"></div>
        <div className="right-paw"></div>
      </div>
      <div className="x" onClick={handleLogin}>
        x
      </div>
    </div>
  );
};

export default Bigfoot;
