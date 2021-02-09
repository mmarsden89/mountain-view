import "./bigfoot.scss";

const Bigfoot = () => {
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
          <input type="text" name="username" placeholder="email@example.com" />
          <input type="password" name="password" placeholder="password" />
        </form>
      </div>
      <div className="signin-bar">
        <div className="signin-text">sign in</div>
        <div className="left-paw"></div>
        <div className="right-paw"></div>
      </div>
    </div>
  );
};

export default Bigfoot;
