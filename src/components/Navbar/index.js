import {useState} from 'react'
import Cookies from 'js-cookie'
import {NavLink, useHistory} from 'react-router-dom'
import {BsFillXCircleFill} from 'react-icons/bs'
import './index.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const history = useHistory()

  const logoutUser = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">
        <div className="nav-logo-con hovering">
          <img
            src="https://i.ibb.co/hmXZxZv/Group-7730.jpg"
            alt="website logo"
            border="0"
          />
          <p>ook Hub</p>
        </div>
      </NavLink>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="hamburger"
      >
        <span> </span>
        <span> </span>
        <span> </span>
      </button>
      <ul className={open ? 'open' : 'close'}>
        <li key="Home" className="hovering">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li key="shelf" className="hovering">
          <NavLink exact to="/shelf" activeClassName="active">
            Bookshelves
          </NavLink>
        </li>
        <li key="logout">
          {' '}
          <button onClick={logoutUser} type="button">
            Logout
          </button>
        </li>
        <li key="cancel" className="cancle-icon">
          {' '}
          <BsFillXCircleFill onClick={() => setOpen(!open)} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
