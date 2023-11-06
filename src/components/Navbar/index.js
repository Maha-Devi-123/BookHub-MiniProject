import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {BsFillXCircleFill} from 'react-icons/bs'
import './index.css'

function Navbar() {
  const [open, setOpen] = useState(false)

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
      <ul className={open ? 'open' : ''}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/bookshelves" activeClassName="active">
            Bookshelves
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/logout" activeClassName="active">
            {' '}
            <button type="button">Logout</button>
          </NavLink>
        </li>
        <li className="cancle-icon">
          {' '}
          <BsFillXCircleFill onClick={() => setOpen(!open)} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
