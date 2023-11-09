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
      <div className="nav-logo-con">
        <img
          src="https://i.ibb.co/hmXZxZv/Group-7730.jpg"
          alt="Group-7730"
          border="0"
        />
        <p>ook Hub</p>
      </div>
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
        <li key="Home">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li key="shelf">
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
