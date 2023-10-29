// import {Component} from 'react'
import './index.css'

const Login = () => (
  <div className="main-con">
    <div className="image-con"> </div>
    <div className="login-con">
      <form className="login-form">
        <div className="logo-con">
          <img
            src="https://i.ibb.co/hmXZxZv/Group-7730.jpg"
            alt="Group-7730"
            border="0"
            className="b-icon"
          />
          <p className="logo-text">ook Hub</p>
        </div>
        <div>
          <label className="username-password" htmlFor="username">
            Username
          </label>
          <input className="input-bar" id="username" type="text" />
          <label className="username-password" htmlFor="password">
            Password
          </label>
          <input className="input-bar" id="password" type="password" />
        </div>
        <button className="login-btn" type="submit">
          LogIn
        </button>
      </form>
    </div>
  </div>
)

export default Login
