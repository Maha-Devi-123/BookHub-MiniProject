import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const logo = () => (
  <div className="logo-con">
    <img
      src="https://i.ibb.co/hmXZxZv/Group-7730.jpg"
      alt="login website logo"
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
      showSubmitError: false,
      errorMsg: '',
    }
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
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

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
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
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {showSubmitError, errorMsg, username, password} = this.state
    return (
      <div className="main-con">
        <div className="image-con">
          <img
            src="https://i.ibb.co/rwftdkR/Rectangle-1467.png"
            alt="website login"
            className="coffee-img"
          />
        </div>
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
                  placeholder="aakash"
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
                  placeholder="sky@007"
                />
              </div>
              {showSubmitError && <p className="error-msg">{errorMsg}</p>}
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
