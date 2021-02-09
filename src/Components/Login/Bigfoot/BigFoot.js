import React, { Form } from "react";
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
        <Form>
          <label>
            username
            <input type="text" name="username" />
          </label>
          <label>
            password
            <input type="text" name="password" />
          </label>
        </Form>
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
