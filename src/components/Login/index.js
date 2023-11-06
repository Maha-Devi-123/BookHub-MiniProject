import {Component} from 'react'
import {Cookies} from 'js-cookie'
import './index.css'

const logo = () => (
  <div className="logo-con">
    <img
      src="https://i.ibb.co/hmXZxZv/Group-7730.jpg"
      alt="Group-7730"
      border="0"
      className="b-icon"
    />
    <p className="logo-text">ook Hub</p>
  </div>
)

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      errorMsg: false,
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
    this.setState({errorMsg: true})
  }

  getUserName = event => {
    const username = event.target.value
    this.setState({username})
  }

  getPassword = event => {
    const password = event.target.value
    this.setState({password})
  }

  render() {
    const {errorMsg, username, password} = this.state
    return (
      <div className="main-con">
        <div className="image-con"> </div>
        <div className="login-con">
          <form className="login-form" onSubmit={this.submitForm}>
            {logo()}
            <div>
              <div className="label-iput-con">
                <label className="username-password" htmlFor="username">
                  Username
                </label>
                <input
                  onChange={this.getUserName}
                  className="input-bar"
                  id="username"
                  type="text"
                  value={username}
                />
              </div>
              <div className="label-iput-con">
                <label className="username-password" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.getPassword}
                  className="input-bar"
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              {errorMsg && (
                <p className="error-msg">Username or Password is Invalid </p>
              )}
            </div>
            <button className="login-btn" type="submit">
              LogIn
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default Login
